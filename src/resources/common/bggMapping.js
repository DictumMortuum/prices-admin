const url = "https://boardgamegeek.com/xmlapi2"

function xmlToJson(xml) {
	// Create the return object
	var obj = {};

	if (xml.nodeType === 1) { // element
		// do attributes
		if (xml.attributes.length > 0) {
		obj["@attributes"] = {};
			for (var j = 0; j < xml.attributes.length; j++) {
				var attribute = xml.attributes.item(j);
				obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
			}
		}
	} else if (xml.nodeType === 3) { // text
		obj = xml.nodeValue;
	}

	// do children
	if (xml.hasChildNodes()) {
		for(var i = 0; i < xml.childNodes.length; i++) {
			var item = xml.childNodes.item(i);
			var nodeName = item.nodeName;
			if (typeof(obj[nodeName]) == "undefined") {
				obj[nodeName] = xmlToJson(item);
			} else {
				if (typeof(obj[nodeName].push) == "undefined") {
					var old = obj[nodeName];
					obj[nodeName] = [];
					obj[nodeName].push(old);
				}
				obj[nodeName].push(xmlToJson(item));
			}
		}
	}
	return obj;
};

const transform = ({ items: { item } }) => item.map(d => {
  let yearpublished;
  if (d.yearpublished !== undefined) {
    yearpublished = d["yearpublished"]["@attributes"]["value"]
  }

  let name;
  if (d.name !== undefined) {
    name = d["name"]["@attributes"]["value"]
  }

  let id;
  if (d["@attributes"].id !== undefined) {
    id = parseInt(d["@attributes"].id)
  }

  return {id, name, yearpublished}
})

export const bgg_search = ({ name }) => fetch(`${url}/search?query=${name}&type=boardgameaccessory,boardgame,boardgameexpansion`)
  .then(rs => rs.text())
  .then(rs => {
    const parser = new DOMParser();
    return parser.parseFromString(rs, 'application/xml');
  })
  .then(xmlToJson)
  .then(transform)
  .then(rs => console.log(rs))
