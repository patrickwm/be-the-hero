import React, { useState, useEffect } from 'react';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';

import api from '../../services/api'
import logoImg from '../../assets/logo.svg';

export default function Profile() {
    const history = useHistory();

    const [incidents, setIncidents] = useState([]);

    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ongId,
            }
        }).then(res => {
            setIncidents(res.data);
        })
    }, [ongId]);

    /**
     * Array vazio -> vai executar isso apenas uma vez 
     * Array preenchido -> irá executar o useEffect() quando o valor que esta sendo passado no array mudar
     * 
     */

    async function handleDeleteIncident(id){
        try{
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId,
                }
            });

            setIncidents(incidents.filter(ic => ic.id !== id));

        } catch(err){
            alert('Erro ao deletar caso, tente novamente.');
        }
    } 

    function handleLogout(){
        localStorage.clear();
        history.push('/');
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Logo" />
                <span>Bem vinda, {ongName}</span>

                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button type="button" onClick={handleLogout}>
                    <FiPower size={18} color="#e02141" />
                </button>
            </header>

            <h1>Casos cadastrados</h1>

            <ul>
                {incidents.map(ic => (
                    <li key={ic.id}>
                        <strong>CASO:</strong>
                        <p>{ic.title}</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>{ic.description}</p>

                        <strong>VALOR:</strong>
                        <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(ic.value)}</p>

                        <button type="button" onClick={() => handleDeleteIncident(ic.id)}>
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                ))}
            </ul>

        </div>
    )
}