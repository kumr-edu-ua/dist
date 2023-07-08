import Layout from '../components/layout';
import { useState } from 'react';

const Bachelors = [
    { text: '073 Менеджмент', price: '23 500' },
    { text: '075 Маркетинг', price: '23 500' },
    { text: '281 Публічне управління та адміністрування', price: '22 500' },
    { text: '071 Облік і оподаткування', price: '22 500' },
    { text: '072 Фінанси, банківська справа та страхування', price: '22 500' },
    { text: '081 Право', price: '22 500' }
];

const Masters = [
    { text: '073 Менеджмент', price: '25 500' },
    { text: '075 Маркетинг', price: '25 500' },
    { text: '281 Публічне управління та адміністрування', price: '22 500' },
    { text: '071 Облік і оподаткування', price: '22 500' },
    { text: '072 Фінанси, банківська справа та страхування', price: '22 500' },
    { text: '081 Право', price: '22 500' }
];

const College = [
    { text: '073 Менеджмент', price: '13 500' },
    { text: '075 Маркетинг', price: '13 500' },
    { text: '072 Фінанси, банківська справа та страхування', price: '12 500' },
    { text: '081 Право', price: '12 500' }
];

export default function Admission() {
    const [list, setList] = useState([]);

    const onclick = (list) => {
        setList(list);
    };
    return (
        <Layout>
            <h1>Вступникам</h1>
            <div className='menupanel'>
                <div className='menu'>
                    <ul className='cursor-pointer'>
                        <li className={list === College && 'active'} onClick={() => onclick(College)}>
                            Коледж &gt;
                        </li>
                        <li className={list === Bachelors && 'active'} onClick={() => onclick(Bachelors)}>
                            Бакалавр &gt;
                        </li>
                        <li className={list === Masters && 'active'} onClick={() => onclick(Masters)}>
                            Магістр &gt;
                        </li>
                    </ul>
                </div>
                <div className='details'>
                    <ul>
                        {list.map((item, index) => (
                            <li className='menucard' key={index}>
                                {item.text} - {item.price} грн.
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            * Ціна навчання вказана за перший рік

            <style jsx>{`
          .container {
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          
          .title {
            margin: 0 0 1rem;
            line-height: 1.15;
            font-size: 3.6rem;
            text-align: center;
          }

          .menupanel {
            display: flex;
            align-items: flex-start;
            width: 100%;
          }

          li.active {
            text-decoration: underline;
            font-weight: bold;
          }

          .details {
            padding-left: 20px;
          }
        `}</style>
        </Layout>
    );
}