import { type LucideIcon } from "lucide-react";
import Title from "./../components/UI/Title";

export type TServiceItem = {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
};

export type ToggleButtonProps = {
  toggle: boolean;
  setToggle: (toggle: boolean) => void;
};

export type TExperienceItem = {
  id: number;
  title: string;
  icon: LucideIcon;
};

export type TBanner = {
  path: string;
  title: string;
  description: string;
};

export type TypeTitleDescription = {
  title: string;
  subtitle?: string;
  des?: string;
  isTheLastWordHighlighted?: Boolean;
};

export type TExperienceBar = {
  id: number;
  title: string;
  percentage: number;
};

export type Tquestion = {
  id: number;
  question: string;
  answer: string;
  isQuestionOpen?: boolean;
};

export type TFaq = Tquestion & {
  toggleQuestion: (id: number) => void;
  isQuestionOpen: boolean;
};

export type TpricingOptions = {
  id: number;
  isAvailable: boolean;
  option: string;
};

export type TPricingCard = {
  id?: number;
  offerType: string;
  price: number;
  trial: string;
  options: TpricingOptions[];
  icon: LucideIcon;
};

type TListItem = {
  id: number;
  label: string;
};

export type TFooterList = {
  id: string;
  list: string;
  elements: TListItem[];
};

export type TChoose = {
  id: number;
  title: string;
  desc: string;
};

export type Tteam = {
  id: number;
  job: string;
  name: string;
  photo: string;
  facebook: string;
  Linkedin: string;
  youtube: string;
  Instagram: string;
};

export type Tinputprops = {
  type: string;
  name: string;
  inputType?: string;
  rows?: number;
  placeholder: string;
};

export type TtestimonialsProps = {
  id: number;
  rating: number;
  image: string;
  name: string;
  testimonial: string;
};

export type TportfolioProps = {
  id: number;
  image: string;
  projectName: string;
  projectType: string;
  technologies: string[];
};
