import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const FormAddKanjin5 = () => {
    const [kanji, setKanji] = useState("");
    const [onyomi, setOnyomi] = useState("");
    const [kunyomi, setKunyomi] = useState("");
    const [arti, setArti] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();
    const MySwal = withReactContent(Swal);

    const saveKanjin5 = async(e) => {
        e.preventDefault();
        try {
            MySwal.fire({
                title: 'Apakah Data Sudah Benar?',
                showCancelButton: true,
                confirmButtonText: 'Simpan',
              }).then((result) => {
                if (result.isConfirmed) {
                axios.post('http://localhost:49153/kanjin5',{
                kanji: kanji,
                onyomi: onyomi,
                kunyomi: kunyomi,
                arti: arti
            });
            Swal.fire('Tersimpan!', '', 'Data Berhasil disimpan')
            navigate("/kanjin5");
            } 
        });
        } catch (error) {
            if(error.response){
                setMsg(error.response.data.msg);
            }
        }
    }


  return (
    <div>
        <p className='has-text-centered'>{msg}</p>
        <h1 className='title'>Kanji Dasar</h1>
        <h2 className='subtitle'>Tambahkan Kanji N5 Baru</h2>
        <div className="card is-shadow" style={{backgroundColor: '#FFFFE0'}}>
            <div className="card-content">
                <div className="content">
                <form onSubmit={saveKanjin5}>
                <div className="columns">
                <div className="column">
                <div className="field">
                        <label className="label">Kanji</label>
                        <div className="control">
                            <input type="text" value={kanji} onChange={(e)=> setKanji(e.target.value)} className="input" placeholder='Kanji' required/>
                        </div>
                    </div></div>
                    <div className="column">
                    <label className="label">On-Yomi</label>
                    <div className="control">
                        <input type="text" value={onyomi} onChange={(e)=> setOnyomi(e.target.value)} className="input" placeholder='On-Yomi' required/>
                    </div></div>
                    </div>
                    <div className="columns">
                    <div className="column">
                    <label className="label">Kun-Yomi</label>
                    <div className="control">
                        <input type="text" value={kunyomi} onChange={(e)=> setKunyomi(e.target.value)} className="input" placeholder='Kun-Yomi' required/>
                    </div>
                    </div>
                    <div className="column">
                    <label className="label">Arti</label>
                    <div className="control">
                        <input type="text" value={arti} onChange={(e)=> setArti(e.target.value)} className="input" placeholder='Arti' required/>
                    </div>
                    </div></div>
                    <div className="field">
                        <div className="control">
                        <button className="button" style={{backgroundColor: '#8B4513', color: 'white'}} type='submit'>Simpan</button>
                    </div>
                    </div>
                </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FormAddKanjin5