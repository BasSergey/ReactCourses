import React, { useEffect, useState, useContext } from "react";
import http from "../http";
import "../index.css"
import Loader from "react-loader-spinner";
import MyModal from "../components/MyModal/MyModal";
import ComputerList from "../components/ComputerList";
import { ThemeContext } from "../components/ThemeContext";

const Computers = () => {
    const delay = 1000;
    const [loading, setLoading] = useState(true);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const fetchComputers = async () => {
        //! asyn await помгают сделать функцию асинкронной
        const computers = await http.get("/computers"); //!работает с файлом http.js, он там закидывает /computers  в конец http
        setComputers(computers.data);
        setLoading(false);
    };

    useEffect(() => {
        const token = localStorage.getItem('token')
        // console.log(token)
        fetchComputers();
    }, []);

    const [computers, setComputers] = useState(null);
    const [computer, setComputer] = useState({
        id: "",
        name: "",
        cpu: "",
        hard_memory: "",
        video: "",
        ram: ""
    });

    const onChange = (e) => {
        if (e.target.id == "id") {
            setComputer({ ...computer, id: e.target.value });
        } else if (e.target.id == "name") {
            setComputer({ ...computer, name: e.target.value });
        }
        else if (e.target.id == "cpu") {
            setComputer({ ...computer, cpu: e.target.value });
        }
        else if (e.target.id == "hard_memory") {
            setComputer({ ...computer, hard_memory: e.target.value });
        }
        else if (e.target.id == "video") {
            setComputer({ ...computer, video: e.target.value });
        }
        else {
            setComputer({ ...computer, ram: e.target.value });
        }
    };

    const addComputer = async () => {
        const id = Math.random() * 1;
        setComputer({ ...computer });
        http.post("/computers/", { ...computer }).then((res) => {
            console.log(res)
            setComputers([...computers, computer]);
        }).catch((err) => console.log(err))
    };
    const removeComputer = (id) => {
        const confirm = window.confirm("Реально удалить?");
        if (confirm == true) {
            http.delete(`/computers/${id}`).then((res) => {//! работает с бэк server.js.  (`/computers${id}`)передаем с id
                console.log(res);
                setComputers(computers.filter((computer) => computer.id !== id))
            }).catch((err) => console.log(err))
        }; //для проверки на удаление
    };
    const clear = () => {
        setComputer({ id: "", name: "", cpu: "", hard_memory: "", video: "", ram: "" });
    };



    const [showModal, setshowModal] = useState(false);

    return (
        <div className="App">
            <div className="container" className={`para ${darkMode ? "para-dark" : "para-light"}`}>

                <MyModal visible={showModal} setVisible={setshowModal}>
                    {
                        <>

                            <div className="input-field col s6">
                                <i className="material-icons prefix">account_circle</i>
                                <input
                                    id="id"
                                    type="text"
                                    className="validate"
                                    value={computer.id}
                                    placeholder="Enter id"
                                    onChange={onChange}
                                />
                            </div>
                            <div className="input-field col s6">
                                <i className="material-icons prefix">account_circle</i>
                                <input
                                    id="name"
                                    type="text"
                                    className="validate"
                                    value={computer.name}
                                    placeholder="Enter name"
                                    onChange={onChange}
                                />
                            </div>
                            <div className="input-field col s6">
                                <i className="material-icons prefix">computer</i>
                                <input
                                    id="cpu"
                                    type="text"
                                    className="validate"
                                    value={computer.cpu}
                                    placeholder="Enter cpu"
                                    onChange={onChange}
                                />
                            </div>
                            <div className="input-field col s6">
                                <i className="material-icons prefix">computer</i>
                                <input
                                    id="hard_memory"
                                    type="text"
                                    value={computer.hard_memory}
                                    className="validate"
                                    placeholder="Enter hard_memory"
                                    onChange={onChange}
                                />
                            </div>
                            <div className="input-field col s6">
                            <i className="material-icons prefix">play_arrow</i>
                                <input
                                    id="video"
                                    type="text"
                                    value={computer.video}
                                    className="validate"
                                    placeholder="Enter video"
                                    onChange={onChange}
                                />
                            </div>
                            <div className="input-field col s6">
                                <i className="material-icons prefix">computer</i>
                                <input
                                    id="ram"
                                    type="text"
                                    value={computer.ram}
                                    className="validate"
                                    placeholder="Enter ram"
                                    onChange={onChange}
                                />
                                <a

                                    className="waves-effect waves-light right btn m-1"
                                    onClick={() => clear()}
                                >
                                    clear
                                </a>
                                <a
                                    className="waves-effect waves-light btn m-1"
                                    onClick={() => addComputer()}
                                >
                                    Add
                                </a>
                            </div>
                        </>
                    }
                </MyModal>
                <div className="row m-1">
                    <div className="col s4">
                        <a
                            className="waves-effect waves-light btn"
                            onClick={() => setshowModal(true)}
                        >
                            Add computer
                        </a>
                    </div>
                    <div className="col s8"></div>
                </div>
                {loading ? (
                    <Loader
                        className="loader-center"
                        type="BeatLoader	"
                        color="#ee6e73"
                        height={100}
                        width={100}
                        timeout={delay} //3 secs
                    />
                ) : (
                    <ComputerList search deleteComputer={removeComputer}>
                        {computers}
                    </ComputerList>
                )}
            </div>
        </div>
    );
};
export default Computers;
