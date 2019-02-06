import { Let } from './let';

export class Aviokompanija {
  id: number;
  naziv: string;
  adresa: string;
  promotivniOpis: string;
  destinacije: string[] = [];
  letovi: Let[] = [];
  spisakKarata: string;
  kofiguracija: string;
  cenovnik: string;
  prtljag: string;
}
