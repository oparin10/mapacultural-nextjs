import {
  AgeRestrictionTypes,
  CulturalCategoryTypes,
  CulturalSpaceAcessibilityType,
  CulturalSpaceSphereTypes,
  CulturalSpaceTypes,
  EventFrequencyTypes,
  GenderTypes,
  RaceTypes,
} from "../@types/literals";

import axios from "axios";

export const locationType: CulturalSpaceTypes[] = [
  "Antiquário",
  "Arquivo privado",
  "Arquivo público",
  "Ateliê",
  "Bem imóvel",
  "Biblioteca comunitária (incluindo pontos de leitura)",
  "Biblioteca escolar",
  "Biblioteca privada",
  "Biblioteca pública",
  "Biblioteca universitária",
  "Casa de espetáculo",
  "Centro comunitário",
  "Centro cultural itinerante",
  "Centro cultural público",
  "Centro de artesanato",
  "Centro de tradições",
  "Centro espírita",
  "Cinema",
  "Circo",
  "Clube social",
  "Coleções",
  "Concha acústica",
  "Escola livre de artes cênicas",
  "Escola livre de artes visuais",
  "Escola livre de audiovisual",
  "Escola livre de cultura popular",
  "Escola livre de cultura tradicionalista",
  "Escola livre de dança",
  "Escola livre de dança",
  "Escola livre de hip-hop",
  "Escola livre de música",
  "Espaço para eventos",
  "Espaço público para projeções de filmes",
  "Estúdio",
  "Galeria de arte",
  "Ginásio poliesportivo",
  "Igreja",
  "Instituição privada",
  "Instituição pública",
  "Livraria",
  "Museu privado",
  "Museu público",
  "Praça",
  "Rádio comunitária",
  "Sala de leitura",
  "Sala multiuso",
  "Sebo (livros usados)",
  "Teatro privado",
  "Teatro público",
  "Terreiro",
  "Videolocadora",
  "Outros",
];

export const accessibilityType: CulturalSpaceAcessibilityType[] = [
  "Banheiros adaptados",
  "Bebedouro adaptado",
  "Cadeira de rodas para uso do visitante",
  "Circuito de visitação adaptado",
  "Corrimão nas escadas e rampas",
  "Elevador adaptado",
  "Rampa de acesso",
  "Sanitário adaptado",
  "Sinalização tátil",
  "Vaga de estacionamento exclusiva para deficientes",
  "Vaga de estacionamento exclusiva para idosos",
  "Outros",
];

export const categories: CulturalCategoryTypes[] = [
  "Artes visuais",
  "Artesanato",
  "Audiovisual",
  "Circo",
  "Cultura popular",
  "Cultura viva",
  "Dança",
  "Folclore",
  "Literatura/Leitura/Livro/Diversidade linguística",
  "Memória e patrimônio",
  "Museu",
  "Música",
  "Produção cultural",
  "Rádio",
  "Teatro",
  "Tradicionalismo",
  "Outros",
];

export let brazilStates = [
  "Acre",
  "Alagoas",
  "Amapá",
  "Amazons",
  "Bahia",
  "Ceará",
  "Distrito Federal",
  "Espírito Santo",
  "Goiás",
  "Maranhão",
  "Mato Grosso",
  "Mato Grosso do Sul",
  "Minas Gerais",
  "Pará",
  "Paraíba",
  "Paraná",
  "Pernambuco",
  "Piauí",
  "Rio de Janeiro",
  "Rio Grande do Norte",
  "Rio Grande do Sul",
  "Rondônia",
  "Roraima",
  "Santa Catarina",
  "São Paulo",
  "Sergipe",
  "Tocantins",
];

export const genders: GenderTypes[] = [
  "Homem",
  "Homem transsexual",
  "Mulher",
  "Mulher transsexual",
  "Não-binário",
  "Travesti",
  "Outros",
  "Não se aplica",
];

export const frequency: EventFrequencyTypes[] = [
  "Semanal",
  "Quinzenal",
  "Mensal",
  "Semestral",
  "Anual",
  "Única apresentação",
];

export const ageRestriction: AgeRestrictionTypes[] = [
  "10",
  "12",
  "14",
  "16",
  "18",
  "Livre",
];

export const spheres: CulturalSpaceSphereTypes[] = [
  "Associação",
  "Coletivo",
  "Empresa",
  "Entidade sindical",
  "Estadual",
  "Federal",
  "Fundação",
  "Mista",
  "Municipal",
  "Outros",
  "Particular",
  "Religiosa",
];

export const races: RaceTypes[] = [
  "Amarela",
  "Branca",
  "Preta",
  "Parda",
  "Indígena",
];

const axiosBaseURL: string =
  process.env.NODE_ENV !== "production"
    ? "http://127.0.0.1:5001/mapeamento-cultural/us-central1/api"
    : "https://tobedecided.com";

export const API = axios.create({ ...axios.defaults, baseURL: axiosBaseURL });

export const EMAIL_ENDPOINT =
  "https://us-central1-atlascodedev-landing.cloudfunctions.net/api/sendMail/mapacultural";

export const taquaraNeighborhoods = [
  "Centro",
  "Jardim do Prado",
  "Ronda",
  "Sagrada Família",
  "Ideal",
  "Km 4",
  "Eldorado",
  "Nossa Senhora de Fátima",
  "Recreio",
  "Morro de Leôncio",
  "Empresa",
  "Tucanos",
  "Mundo Novo",
  "Medianeira",
  "Santa Terezinha",
  "Petrópolis",
  "Santa Rosa",
  "Fogão Gaúcho",
  "Cruzeiro do Sul",
  "Picada Francesa",
  "Morro da Cruz",
  "Santa Maria",
];
