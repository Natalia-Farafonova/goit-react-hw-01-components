import s from './Conteiner.module.css';

export default function Conteiner({ children }) {
  return <div className={s.container}>{children}</div>;
}
