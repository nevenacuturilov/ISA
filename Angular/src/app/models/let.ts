import { Aviokompanija } from './aviokompanija';

export class Let {
  id: number;
  datumPoletanja: string;
  vremePoletanja: string;
  datumSletanja: string;
  vremeSletanja: string;
  vremePutovanja: string;
  dvuzinaPutovanja: string;
  brojPresedanja: number;
  lokacijePresedanja: string[] = [];
  cenaKarte: number;
  aviokompanija: Aviokompanija; // ne znam da li treba
}
