import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Service = () => {
    const { id } = useParams();
    const [service, setService] = useState(null);
    useEffect(() => {
        fetch('/services.json').then(res => res.json()).then(data => data.find(item => item.key === id)).then(ser => { console.log(ser); setService(ser); });
    }, []);
    return (
        <section className="container">

        </section>
    );
};

export default Service;