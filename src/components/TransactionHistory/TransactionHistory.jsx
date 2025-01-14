import s from './TransactionHistory.module.css'

const TransactionHistory = ({ items }) => {
    return (
        <table className={s.table}>
            <thead className={s.head}>
                <tr>
                    <th className={s.headItem}>Type</th>
                    <th className={s.headItem}>Amount</th>
                    <th className={s.headItem}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map((trans) => {
                    return (
                        <tr key={trans.id} className={s.row}>
                            <td className={s.item}>{trans.type}</td>
                            <td className={s.item}>{trans.amount}</td>
                            <td className={s.item}>{trans.currency}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default TransactionHistory;