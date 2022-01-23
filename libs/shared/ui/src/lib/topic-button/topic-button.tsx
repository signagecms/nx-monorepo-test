import './topic-button.module.css';

/* eslint-disable-next-line */
export interface TopicButtonProps {
  topicName?: string;
}

export function TopicButton({topicName}: TopicButtonProps) {
  return (
    <div>
      <button>{topicName}</button>
    </div>
  );
}

export default TopicButton;
