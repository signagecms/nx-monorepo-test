import './youtube.module.css';

export interface YoutubeProps {
  title: string;
  uid: string;
}

export function Youtube(props: YoutubeProps) {
  return (
    <div>
      <iframe src={`https://www.youtube.com/embed/${props.uid}`} width="720px" height="480px" title={props.title} className="mb-6"></iframe>
    </div>
  );
}

export default Youtube;
