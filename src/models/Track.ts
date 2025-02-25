export interface Track {
  id: string;
  title: string;
  artist: string;
  album?: string;
  duration: number;
  artwork?: string;
  url: string;
  isInstrumental: boolean;
  format: string;
  source: 'local' | 'youtube';
}

export default Track; 