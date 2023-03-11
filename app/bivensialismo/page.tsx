import styles from "./page.module.css";

const Bivensialismo = () => (
  <div className={styles.wrapper}>
    <div className={styles.bible}>
      <p>
        <span className={styles.bivensialismo}>Bivensialismo</span> é um modo de
        vida focado no bom senso e nos bons costumes relativos à prática
        esportiva.
      </p>
      <p>
        Em 30 de maio de 2022 foi proferido{" "}
        <i className={styles.motto}>
          {'"Eu pago em dia; Eu chego cedo; Eu vou com a peita correta"'}
        </i>
        . Tais dizeres então se tornaram o lema, e deram origem aos três
        mandamentos, que são encontrados abaixo:
      </p>
    </div>

    <div className={styles.commandments}>
      <div>Não inadimplirás</div>
      <div>Não se atrasarás</div>
      <div>Não vestirás o manto inadequado</div>
    </div>
  </div>
);

export default Bivensialismo;
