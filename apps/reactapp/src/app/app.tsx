import styles from './app.module.css';
import NxWelcome from './nx-welcome';
import {TopicButton} from '@mycom/shared/ui'

export function App() {
  return (
    <>
     <TopicButton />
      <NxWelcome title="reactapp" />
      <div />
    </>
  );
}

export default App;
