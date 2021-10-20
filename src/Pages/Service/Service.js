import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Service = () => {
    const { id } = useParams();
    const [service, setService] = useState(null);
    useEffect(() => {
        fetch('/services.json').then(res => res.json()).then(data => data.find(item => item.key === id)).then(ser => { console.log(ser); setService(ser); });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <section className="container p-5">
            {service ? (
                <>
                    <img src={service.picture} alt="" className="img-fuid " />
                    <h1 className="text-white my-5">{service.title} </h1>
                    <p className="text-white">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, ea. Eius eaque blanditiis dignissimos incidunt exercitationem sunt odio odit ullam, dolor ratione sed, quibusdam aliquid rerum doloribus! Quam hic nostrum voluptates, eius quis aperiam odio veniam fugiat ipsa aut modi minima corporis sunt! Nobis delectus, obcaecati sequi qui ipsum dolore.
                    </p>
                </>

            ) : (<></>)}
        </section>
    );
};

export default Service;