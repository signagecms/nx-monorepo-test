import { GetStaticProps } from 'next';
import './index.module.css';

/* eslint-disable-next-line */
export interface AboutProps {
  name: string;
}

export function About({name}: AboutProps) {
  return (
    <div>
      <h1>Welcome {name}!</h1>
    </div>
  );
}

export default About;

export const getStaticProps: GetStaticProps<AboutProps> = async (context) => {

  return {
    props: {
      name: 'Justin'
    }
  }
}
