import axios from 'axios'
import React from 'react'
import { ContextAllData } from '../../Context/ContextData'
import "./Modal.css"

const Modal = ({ id }) => {
    console.log(id)

    const { modalInfo, setModalInfo } = React.useContext(ContextAllData);

    const modalCall = async () => {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`) // call api with particular id
        setModalInfo([data])

    }

    React.useEffect(() => {
        modalCall();

    }, [id]) // it call modalCall() with change in id

    return (
        <div>
            {
                modalInfo ? modalInfo.map((ele) => {
                    return (
                        <>
                            <div className="pokemon-basic-details">
                                <img src={ele.sprites.front_default} />
                                <p>height {ele.height}</p>
                                <p>weight {ele.weight}</p>
                            </div>
                            <p className="text-center fs-2">Pokemon Abilities</p>

                            <table class="table responsive">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">Ability Name</th>
                                        <th scope="col">Ability Slot</th>
                                    </tr>
                                </thead>
                                {ele.abilities.map((item) => (
                                    <tbody className="thead-light">
                                        <tr>
                                            <th scope="row">{item.ability.name}</th>
                                            <th scope="row">{item.slot}</th>
                                        </tr>
                                    </tbody>
                                ))}
                            </table>

                            <p className="text-center fs-2">Pokemon Stats</p>
                            <table class="table">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">Base Stat</th>
                                        <th scope="col">Effort</th>
                                        <th scope="col">Stat Name</th>
                                    </tr>
                                </thead>
                                {ele.stats.map((item) => (
                                    <tbody className="thead-light">
                                        <tr>
                                            <th scope="row">{item.base_stat}</th>
                                            <th scope="row">{item.effort}</th>
                                            <th scope="row">{item.stat.name}</th>
                                        </tr>
                                    </tbody>
                                ))}
                            </table>
                            <p className="text-center fs-2">Pokemon Moves</p>
                            <table class="table">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">Move Name</th>
                                        <th scope="col">Move Learn Method</th>
                                        <th scope="col">Move Version</th>
                                    </tr>
                                </thead>
                                {ele.moves.map((item) => (
                                    <tbody className="thead-light">
                                        <tr>
                                            <th scope="row">{item?.move.name}</th>
                                            <th scope="row">
                                                {
                                                    item?.version_group_details[0]?.move_learn_method
                                                        ?.name
                                                }
                                            </th>
                                            <th scope="row">
                                                {item?.version_group_details[0]?.version_group?.name}
                                            </th>
                                        </tr>
                                    </tbody>
                                ))}
                            </table>


                        </>
                    )
                }) : "loading....."
            }
        </div>
    )
}

export default Modal