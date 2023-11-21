import * as React from 'react';
import Container from '../components/Container';
import { Typography, Stack } from '@mui/material';
import pkg from '../../package.json';

const Component = () => {
  return (
    <Container title="Dashboard">
      <Stack p={4}>
        <Typography>
          Καλώς ήρθατε στο prices v{pkg.version}!
        </Typography>
        <Typography>
          Σε αυτό το site μπορείτε να βρείτε τιμές από τα μαγαζιά επιτραπεζίων μαγαζιών της Ελλάδας.
        </Typography>
        <Typography mt={3}>
          Δυστυχώς ο αριθμός των ανανεώσεων που γίνονται καθημερινά στους τίτλους είναι αρκετός, τα οποία ορίζονται ως αλλαγή στη διαθεσιμότητα ή στην τιμή. Για αυτόν τον λόγο, ο καλύτερος τρόπος να χρησιμοποιήσετε το site είναι να κάνετε αναζήτηση.
        </Typography>
        <Typography>
          - Όταν κάνετε αναζήτηση, μην βάζετε τόνους. Για παράδειγμα η αναζήτηση για: <a href="/#/prices?displayedFilters=%7B%22name%40autolike%22%3Atrue%7D&filter=%7B%22stock%22%3A0%2C%22name%40autolike%22%3A%22Orl%C3%A9ans%20%22%7D&order=DESC&page=1&perPage=10&sort=updated">Orléans</a>, δε θα επιστρέψει αποτελέσματα, αλλά η αναζήτηση για <a href="/#/prices?displayedFilters=%7B%22name%40autolike%22%3Atrue%7D&filter=%7B%22stock%22%3A0%2C%22name%40autolike%22%3A%22Orleans%20%22%7D&order=DESC&page=1&perPage=10&sort=updated">Orleans</a>, θα επιστρέψει όλους τους τίτλους, συμπεριλαμβανομένων και εκείνων που έχουν τόνους.
        </Typography>
        <Typography>
          - Η αναζήτηση με κεφαλαία δεν έχει σημασία, για παράδειγμα: <a href="/#/prices?displayedFilters=%7B%22name%40autolike%22%3Atrue%7D&filter=%7B%22stock%22%3A0%2C%22name%40autolike%22%3A%22ORLEANS%20%22%7D&order=DESC&page=1&perPage=10&sort=updated">ORLEANS</a>.
        </Typography>
        <Typography>
          - Μπορείτε να βάλετε ελεύθερα ειδικούς χαρακτήρες όπως θαυμαστικά, άνω κάτω τελείες, παύλες και τα λοιπά, αλλά να θυμάστε ότι αυτοί οι χαρακτήρες θα αγνοηθούν στην αναζήτηση. Αυτό γίνεται για λόγους ασφαλείας, αλλά βοηθάει και στις αναζητήσεις, για παράδειγμα το παρακάτω <a href="/#/prices?displayedFilters=%7B%22name%40autolike%22%3Atrue%7D&filter=%7B%22stock%22%3A0%2C%22name%40autolike%22%3A%22dune%3A%20imperium%3A%20uprising%22%7D&order=DESC&page=1&perPage=10&sort=updated">dune: imperium: uprising</a> ειναι το ίδιο με το <a href="/#/prices?displayedFilters=%7B%22name%40autolike%22%3Atrue%7D&filter=%7B%22stock%22%3A0%2C%22name%40autolike%22%3A%22dune%20imperium%20uprising%22%7D&order=DESC&page=1&perPage=10&sort=updated">dune imperium</a>.
        </Typography>
        <Typography>
          - Χρησιμοποιήστε το φίλτρο Updated, το οποίο θα επιστρέψει μονο τις τιμές οι οποίες έχουν επεξεργαστεί μέσα στον τελευταίο καιρό. Παράδειγμα <a href="/#/prices?displayedFilters=%7B%22name%40autolike%22%3Atrue%7D&filter=%7B%22stock%22%3A0%2C%22name%40autolike%22%3A%22everdell%20%22%2C%22updated%40gt%22%3A%222023-11-14%22%7D&order=DESC&page=1&perPage=10&sort=updated">everdell</a>.
        </Typography>
        <Typography mt={3}>
          Στην περίπτωση που βρήκατε κάποιο bug, μπορείτε να επικοινωνήσετε μαζί μου ή στο <a href="https://boardgamegeek.com/thread/2640067/httpspricesdictummortuumcom-yphresia-enhmerwshs-gi">thread στο bgg</a>.
        </Typography>
        <Typography mt={3}>
          Το παρόν site θα είναι πάντα δωρεάν στη χρήση. Εάν θέλετε να στηρίξετε την προσπάθειά μου, τότε μπορείτε να μου στείλετε χρηματική βοήθεια μέσω <a href="https://revolut.me/dimitrdfxf">Revolut</a> ή IRIS στο 6992034433. Τυχόν δωρεές θα χρησιμοποιηθούν αποκλειστικά για την αγορά επιτραπεζίων :D.
        </Typography>
      </Stack>
    </Container>
  );
}

export default Component;
