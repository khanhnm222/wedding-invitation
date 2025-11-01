export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  reversed?: boolean;
}

export interface GalleryItem {
  id: string;
  image: string;
  alt: string;
}

export interface FormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  guests: string;
  message: string;
}