import styles from './styles.module.scss'

interface SubscribeButtonProps {
  priceId: string;
}

const SubscribeButton: React.FC<SubscribeButtonProps> = ({ priceId }) => {
  return (
    <button type="button" className={styles.subscribeButton}>
      Subscribe now
    </button>
  )
}

export default SubscribeButton;
