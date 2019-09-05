
import { Aviokompanija } from './aviokompanija';

export class Let {
  id: number;
  mestoPoletanja: string;
  mestoSletanja: string;
  datumPoletanja: string;
  vremePoletanja: string;
  datumSletanja: string;
  vremeSletanja: string;
  vremePutovanja: string;
  duzinaPutovanja: string;
  brojPresedanja: number;
  lokacijePresedanja: string[] = [];
  cenaKarte: number;
  aviokompanija: Aviokompanija;
}
