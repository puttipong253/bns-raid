import { useState } from "react";

const Home = () => {
    const [number1Boss1, setNumber1Boss1] = useState("");
    const [number1Boss2, setNumber1Boss2] = useState("");
    const [resultNumber1, setResultNumber1] = useState(0);

    const [number2Boss1, setNumber2Boss1] = useState("");
    const [number2Boss2, setNumber2Boss2] = useState("");
    const [resultNumber2, setResultNumber2] = useState(0);

    const [number3Boss1, setNumber3Boss1] = useState("");
    const [number3Boss2, setNumber3Boss2] = useState("");
    const [resultNumber3, setResultNumber3] = useState(0);

    const [number4Boss1, setNumber4Boss1] = useState("");
    const [number4Boss2, setNumber4Boss2] = useState("");
    const [resultNumber4, setResultNumber4] = useState(0);

    const [number5Boss1, setNumber5Boss1] = useState("");
    const [number5Boss2, setNumber5Boss2] = useState("");
    const [resultNumber5, setResultNumber5] = useState(0);

    const [number6Boss1, setNumber6Boss1] = useState("");
    const [number6Boss2, setNumber6Boss2] = useState("");
    const [resultNumber6, setResultNumber6] = useState(0);

    const [number7Boss1, setNumber7Boss1] = useState("");
    const [number7Boss2, setNumber7Boss2] = useState("");
    const [resultNumber7, setResultNumber7] = useState(0);

    const [number8Boss1, setNumber8Boss1] = useState("");
    const [number8Boss2, setNumber8Boss2] = useState("");
    const [resultNumber8, setResultNumber8] = useState(0);

    const [number9Boss1, setNumber9Boss1] = useState("");
    const [number9Boss2, setNumber9Boss2] = useState("");
    const [resultNumber9, setResultNumber9] = useState(0);

    const [number10Boss1, setNumber10Boss1] = useState("");
    const [number10Boss2, setNumber10Boss2] = useState("");
    const [resultNumber10, setResultNumber10] = useState(0);

    const [number11Boss1, setNumber11Boss1] = useState("");
    const [number11Boss2, setNumber11Boss2] = useState("");
    const [resultNumber11, setResultNumber11] = useState(0);

    const [number12Boss1, setNumber12Boss1] = useState("");
    const [number12Boss2, setNumber12Boss2] = useState("");
    const [resultNumber12, setResultNumber12] = useState(0);

    const [name1, setName1] = useState("");
    const [name2, setName2] = useState("");
    const [name3, setName3] = useState("");
    const [name4, setName4] = useState("");
    const [name5, setName5] = useState("");
    const [name6, setName6] = useState("");
    const [name7, setName7] = useState("");
    const [name8, setName8] = useState("");
    const [name9, setName9] = useState("");
    const [name10, setName10] = useState("");
    const [name11, setName11] = useState("");
    const [name12, setName12] = useState("");

    const onSubmit = () => {
        const member1 = Number(number1Boss1) + Number(number1Boss2);
        const member2 = Number(number2Boss1) + Number(number2Boss2);
        const member3 = Number(number3Boss1) + Number(number3Boss2);
        const member4 = Number(number4Boss1) + Number(number4Boss2);
        const member5 = Number(number5Boss1) + Number(number5Boss2);
        const member6 = Number(number6Boss1) + Number(number6Boss2);
        const member7 = Number(number7Boss1) + Number(number7Boss2);
        const member8 = Number(number8Boss1) + Number(number8Boss2);
        const member9 = Number(number9Boss1) + Number(number9Boss2);
        const member10 = Number(number10Boss1) + Number(number10Boss2);
        const member11 = Number(number11Boss1) + Number(number11Boss2);
        const member12 = Number(number12Boss1) + Number(number12Boss2);

        const sum1 = 0;
        const sum2 = 0;
        const sum3 = 0;
        const sum4 = 0;
        const sum5 = 0;
        const sum6 = 0;
        const sum7 = 0;
        const sum8 = 0;
        const sum9 = 0;
        const sum10 = 0;
        const sum11 = 0;
        const sum12 = 0;

        if (member1 !== 0) {
            const res1 = Number(member1) / 11;
            sum2 = res1;
            sum3 = res1;
            sum4 = res1;
            sum5 = res1;
            sum6 = res1;
            sum7 = res1;
            sum8 = res1;
            sum9 = res1;
            sum10 = res1;
            sum11 = res1;
            sum12 = res1;
        }
        if (member2 !== 0) {
            const res2 = Number(member2) / 11;
            sum1 = sum1 + res2;
            sum3 = sum3 + res2;
            sum4 = sum4 + res2;
            sum5 = sum5 + res2;
            sum6 = sum6 + res2;
            sum7 = sum7 + res2;
            sum8 = sum8 + res2;
            sum9 = sum9 + res2;
            sum10 = sum10 + res2;
            sum11 = sum11 + res2;
            sum12 = sum12 + res2;
        }
        if (member3 !== 0) {
            const res3 = Number(member3) / 11;
            sum1 = sum1 + res3;
            sum2 = sum2 + res3;
            sum4 = sum4 + res3;
            sum5 = sum5 + res3;
            sum6 = sum6 + res3;
            sum7 = sum7 + res3;
            sum8 = sum8 + res3;
            sum9 = sum9 + res3;
            sum10 = sum10 + res3;
            sum11 = sum11 + res3;
            sum12 = sum12 + res3;
        }
        if (member4 !== 0) {
            const res4 = Number(member4) / 11;
            sum1 = sum1 + res4;
            sum2 = sum2 + res4;
            sum3 = sum3 + res4;
            sum5 = sum5 + res4;
            sum6 = sum6 + res4;
            sum7 = sum7 + res4;
            sum8 = sum8 + res4;
            sum9 = sum9 + res4;
            sum10 = sum10 + res4;
            sum11 = sum11 + res4;
            sum12 = sum12 + res4;
        }
        if (member5 !== 0) {
            const res5 = Number(member5) / 11;
            sum1 = sum1 + res5;
            sum2 = sum2 + res5;
            sum3 = sum3 + res5;
            sum4 = sum4 + res5;
            sum6 = sum6 + res5;
            sum7 = sum7 + res5;
            sum8 = sum8 + res5;
            sum9 = sum9 + res5;
            sum10 = sum10 + res5;
            sum11 = sum11 + res5;
            sum12 = sum12 + res5;
        }
        if (member6 !== 0) {
            const res6 = Number(member6) / 11;
            sum1 = sum1 + res6;
            sum2 = sum2 + res6;
            sum3 = sum3 + res6;
            sum4 = sum4 + res6;
            sum5 = sum5 + res6;
            sum7 = sum7 + res6;
            sum8 = sum8 + res6;
            sum9 = sum9 + res6;
            sum10 = sum10 + res6;
            sum11 = sum11 + res6;
            sum12 = sum12 + res6;
        }
        if (member7 !== 0) {
            const res4 = Number(member7) / 11;
            sum1 = sum1 + res4;
            sum2 = sum2 + res4;
            sum3 = sum3 + res4;
            sum4 = sum4 + res4;
            sum5 = sum5 + res4;
            sum6 = sum6 + res4;
            sum8 = sum8 + res4;
            sum9 = sum9 + res4;
            sum10 = sum10 + res4;
            sum11 = sum11 + res4;
            sum12 = sum12 + res4;
        }
        if (member8 !== 0) {
            const res8 = Number(member8) / 11;
            sum1 = sum1 + res8;
            sum2 = sum2 + res8;
            sum3 = sum3 + res8;
            sum4 = sum4 + res8;
            sum5 = sum5 + res8;
            sum6 = sum6 + res8;
            sum7 = sum7 + res8;
            sum9 = sum9 + res8;
            sum10 = sum10 + res8;
            sum11 = sum11 + res8;
            sum12 = sum12 + res8;
        }
        if (member9 !== 0) {
            const res9 = Number(member9) / 11;
            sum1 = sum1 + res9;
            sum2 = sum2 + res9;
            sum3 = sum3 + res9;
            sum4 = sum4 + res9;
            sum5 = sum5 + res9;
            sum6 = sum6 + res9;
            sum7 = sum7 + res9;
            sum8 = sum8 + res9;
            sum10 = sum10 + res9;
            sum11 = sum11 + res9;
            sum12 = sum12 + res9;
        }

        if (member10 !== 0) {
            const res10 = Number(member10) / 11;
            sum1 = sum1 + res10;
            sum2 = sum2 + res10;
            sum3 = sum3 + res10;
            sum4 = sum4 + res10;
            sum5 = sum5 + res10;
            sum6 = sum6 + res10;
            sum7 = sum7 + res10;
            sum8 = sum8 + res10;
            sum9 = sum9 + res10;
            sum11 = sum11 + res10;
            sum12 = sum12 + res10;
        }
        if (member11 !== 0) {
            const res11 = Number(member11) / 11;
            sum1 = sum1 + res11;
            sum2 = sum2 + res11;
            sum3 = sum3 + res11;
            sum4 = sum4 + res11;
            sum5 = sum5 + res11;
            sum6 = sum6 + res11;
            sum7 = sum7 + res11;
            sum8 = sum8 + res11;
            sum9 = sum9 + res11;
            sum10 = sum10 + res11;
            sum12 = sum12 + res11;
        }
        if (member12 !== 0) {
            const res12 = Number(member12) / 11;
            sum1 = sum1 + res12;
            sum2 = sum2 + res12;
            sum3 = sum3 + res12;
            sum4 = sum4 + res12;
            sum5 = sum5 + res12;
            sum6 = sum6 + res12;
            sum7 = sum7 + res12;
            sum8 = sum8 + res12;
            sum9 = sum9 + res12;
            sum10 = sum10 + res12;
            sum11 = sum11 + res12;
        }

        setResultNumber1(parseInt(sum1));
        setResultNumber2(parseInt(sum2));
        setResultNumber3(parseInt(sum3));
        setResultNumber4(parseInt(sum4));
        setResultNumber5(parseInt(sum5));
        setResultNumber6(parseInt(sum6));
        setResultNumber7(parseInt(sum7));
        setResultNumber8(parseInt(sum8));
        setResultNumber9(parseInt(sum9));
        setResultNumber10(parseInt(sum10));
        setResultNumber11(parseInt(sum11));
        setResultNumber12(parseInt(sum12));
    };

    const onClear = () => {
        setNumber1Boss1("");
        setNumber2Boss1("");
        setNumber3Boss1("");
        setNumber4Boss1("");
        setNumber5Boss1("");
        setNumber6Boss1("");
        setNumber7Boss1("");
        setNumber8Boss1("");
        setNumber9Boss1("");
        setNumber10Boss1("");
        setNumber11Boss1("");
        setNumber12Boss1("");

        setNumber1Boss2("");
        setNumber2Boss2("");
        setNumber3Boss2("");
        setNumber4Boss2("");
        setNumber5Boss2("");
        setNumber6Boss2("");
        setNumber7Boss2("");
        setNumber8Boss2("");
        setNumber9Boss2("");
        setNumber10Boss2("");
        setNumber11Boss2("");
        setNumber12Boss2("");

        setResultNumber1(0);
        setResultNumber2(0);
        setResultNumber3(0);
        setResultNumber4(0);
        setResultNumber5(0);
        setResultNumber6(0);
        setResultNumber7(0);
        setResultNumber8(0);
        setResultNumber9(0);
        setResultNumber10(0);
        setResultNumber11(0);
        setResultNumber12(0);
    };

    return (
        <>
            <div className="bg-gray-800 p-7 rounded-md text-white">
                <div className="flex justify-between border-b mb-5 pb-5">
                    <div className="text-lg">GOLD</div>
                    <div>
                        <button
                            className=" bg-red-500 px-3 py-1 rounded-md mr-2"
                            onClick={onClear}
                        >
                            CLEAR
                        </button>

                        <button
                            className=" bg-amber-500 px-3 py-1 rounded-md"
                            onClick={onSubmit}
                        >
                            CALCULATE
                        </button>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between my-2">
                        <div>
                            <span className="mr-3">1</span>
                            <input
                                type="text"
                                className="text-black rounded-sm focus:outline-none px-1 mr-2 w-28"
                                onChange={(e) => setName1(e.target.value)}
                                value={name1}
                                placeholder="Name"
                            />
                            <input
                                type="number"
                                className="text-black rounded-sm focus:outline-none px-1 mr-2 w-28"
                                onChange={(e) =>
                                    setNumber1Boss1(e.target.value)
                                }
                                value={number1Boss1}
                                placeholder="Gold Boss 1"
                            />
                            <input
                                type="number"
                                className="text-black rounded-sm focus:outline-none px-1 w-28"
                                onChange={(e) =>
                                    setNumber1Boss2(e.target.value)
                                }
                                value={number1Boss2}
                                placeholder="Gold Boss 2"
                            />
                        </div>
                        <div>{resultNumber1}</div>
                    </div>

                    <div className="flex justify-between my-2">
                        <div>
                            <span className="mr-3">2</span>
                            <input
                                type="text"
                                className="text-black rounded-sm focus:outline-none px-1 mr-2 w-28"
                                onChange={(e) => setName2(e.target.value)}
                                value={name2}
                                placeholder="Name"
                            />
                            <input
                                type="number"
                                className="text-black rounded-sm focus:outline-none px-1 mr-2 w-28"
                                onChange={(e) =>
                                    setNumber2Boss1(e.target.value)
                                }
                                value={number2Boss1}
                                placeholder="Gold Boss 1"
                            />
                            <input
                                type="number"
                                className="text-black rounded-sm focus:outline-none px-1 w-28"
                                onChange={(e) =>
                                    setNumber2Boss2(e.target.value)
                                }
                                value={number2Boss2}
                                placeholder="Gold Boss 2"
                            />
                        </div>
                        <div>{resultNumber2}</div>
                    </div>

                    <div className="flex justify-between my-2">
                        <div>
                            <span className="mr-3">3</span>
                            <input
                                type="text"
                                className="text-black rounded-sm focus:outline-none px-1 mr-2 w-28"
                                onChange={(e) => setName3(e.target.value)}
                                value={name3}
                                placeholder="Name"
                            />
                            <input
                                type="number"
                                className="text-black rounded-sm focus:outline-none px-1 mr-2 w-28"
                                onChange={(e) =>
                                    setNumber3Boss1(e.target.value)
                                }
                                value={number3Boss1}
                                placeholder="Gold Boss 1"
                            />
                            <input
                                type="number"
                                className="text-black rounded-sm focus:outline-none px-1 w-28"
                                onChange={(e) =>
                                    setNumber3Boss2(e.target.value)
                                }
                                value={number3Boss2}
                                placeholder="Gold Boss 2"
                            />
                        </div>
                        <div>{resultNumber3}</div>
                    </div>

                    <div className="flex justify-between my-2">
                        <div>
                            <span className="mr-3">4</span>
                            <input
                                type="text"
                                className="text-black rounded-sm focus:outline-none px-1 mr-2 w-28"
                                onChange={(e) => setName4(e.target.value)}
                                value={name4}
                                placeholder="Name"
                            />
                            <input
                                type="number"
                                className="text-black rounded-sm focus:outline-none px-1 mr-2 w-28"
                                onChange={(e) =>
                                    setNumber4Boss1(e.target.value)
                                }
                                value={number4Boss1}
                                placeholder="Gold Boss 1"
                            />
                            <input
                                type="number"
                                className="text-black rounded-sm focus:outline-none px-1 w-28"
                                onChange={(e) =>
                                    setNumber4Boss2(e.target.value)
                                }
                                value={number4Boss2}
                                placeholder="Gold Boss 2"
                            />
                        </div>
                        <div>{resultNumber4}</div>
                    </div>

                    <div className="flex justify-between my-2">
                        <div>
                            <span className="mr-3">5</span>
                            <input
                                type="text"
                                className="text-black rounded-sm focus:outline-none px-1 mr-2 w-28"
                                onChange={(e) => setName5(e.target.value)}
                                value={name5}
                                placeholder="Name"
                            />
                            <input
                                type="number"
                                className="text-black rounded-sm focus:outline-none px-1 mr-2 w-28"
                                onChange={(e) =>
                                    setNumber5Boss1(e.target.value)
                                }
                                value={number5Boss1}
                                placeholder="Gold Boss 1"
                            />
                            <input
                                type="number"
                                className="text-black rounded-sm focus:outline-none px-1 w-28"
                                onChange={(e) =>
                                    setNumber5Boss2(e.target.value)
                                }
                                value={number5Boss2}
                                placeholder="Gold Boss 2"
                            />
                        </div>
                        <div>{resultNumber5}</div>
                    </div>

                    <div className="flex justify-between my-2">
                        <div>
                            <span className="mr-3">6</span>
                            <input
                                type="text"
                                className="text-black rounded-sm focus:outline-none px-1 mr-2 w-28"
                                onChange={(e) => setName6(e.target.value)}
                                value={name6}
                                placeholder="Name"
                            />
                            <input
                                type="number"
                                className="text-black rounded-sm focus:outline-none px-1 mr-2 w-28"
                                onChange={(e) =>
                                    setNumber6Boss1(e.target.value)
                                }
                                value={number6Boss1}
                                placeholder="Gold Boss 1"
                            />
                            <input
                                type="number"
                                className="text-black rounded-sm focus:outline-none px-1 w-28"
                                onChange={(e) =>
                                    setNumber6Boss2(e.target.value)
                                }
                                value={number6Boss2}
                                placeholder="Gold Boss 2"
                            />
                        </div>
                        <div>{resultNumber6}</div>
                    </div>

                    <div className="flex justify-between my-2">
                        <div>
                            <span className="mr-3">7</span>
                            <input
                                type="text"
                                className="text-black rounded-sm focus:outline-none px-1 mr-2 w-28"
                                onChange={(e) => setName7(e.target.value)}
                                value={name7}
                                placeholder="Name"
                            />
                            <input
                                type="number"
                                className="text-black rounded-sm focus:outline-none px-1 mr-2 w-28"
                                onChange={(e) =>
                                    setNumber7Boss1(e.target.value)
                                }
                                value={number7Boss1}
                                placeholder="Gold Boss 1"
                            />
                            <input
                                type="number"
                                className="text-black rounded-sm focus:outline-none px-1 w-28"
                                onChange={(e) =>
                                    setNumber7Boss2(e.target.value)
                                }
                                value={number7Boss2}
                                placeholder="Gold Boss 2"
                            />
                        </div>
                        <div>{resultNumber7}</div>
                    </div>

                    <div className="flex justify-between my-2">
                        <div>
                            <span className="mr-3">8</span>
                            <input
                                type="text"
                                className="text-black rounded-sm focus:outline-none px-1 mr-2 w-28"
                                onChange={(e) => setName8(e.target.value)}
                                value={name8}
                                placeholder="Name"
                            />
                            <input
                                type="number"
                                className="text-black rounded-sm focus:outline-none px-1 mr-2 w-28"
                                onChange={(e) =>
                                    setNumber8Boss1(e.target.value)
                                }
                                value={number8Boss1}
                                placeholder="Gold Boss 1"
                            />
                            <input
                                type="number"
                                className="text-black rounded-sm focus:outline-none px-1 w-28"
                                onChange={(e) =>
                                    setNumber8Boss2(e.target.value)
                                }
                                value={number8Boss2}
                                placeholder="Gold Boss 2"
                            />
                        </div>
                        <div>{resultNumber8}</div>
                    </div>

                    <div className="flex justify-between my-2">
                        <div>
                            <span className="mr-3">9</span>
                            <input
                                type="text"
                                className="text-black rounded-sm focus:outline-none px-1 mr-2 w-28"
                                onChange={(e) => setName9(e.target.value)}
                                value={name9}
                                placeholder="Name"
                            />
                            <input
                                type="number"
                                className="text-black rounded-sm focus:outline-none px-1 mr-2 w-28"
                                onChange={(e) =>
                                    setNumber9Boss1(e.target.value)
                                }
                                value={number9Boss1}
                                placeholder="Gold Boss 1"
                            />
                            <input
                                type="number"
                                className="text-black rounded-sm focus:outline-none px-1 w-28"
                                onChange={(e) =>
                                    setNumber9Boss2(e.target.value)
                                }
                                value={number9Boss2}
                                placeholder="Gold Boss 2"
                            />
                        </div>
                        <div>{resultNumber9}</div>
                    </div>

                    <div className="flex justify-between my-2">
                        <div>
                            <span className="mr-3">10</span>
                            <input
                                type="text"
                                className="text-black rounded-sm focus:outline-none px-1 mr-2 w-28"
                                onChange={(e) => setName10(e.target.value)}
                                value={name10}
                                placeholder="Name"
                            />
                            <input
                                type="number"
                                className="text-black rounded-sm focus:outline-none px-1 mr-2 w-28"
                                onChange={(e) =>
                                    setNumber10Boss1(e.target.value)
                                }
                                value={number10Boss1}
                                placeholder="Gold Boss 1"
                            />
                            <input
                                type="number"
                                className="text-black rounded-sm focus:outline-none px-1 w-28"
                                onChange={(e) =>
                                    setNumber10Boss2(e.target.value)
                                }
                                value={number10Boss2}
                                placeholder="Gold Boss 2"
                            />
                        </div>
                        <div>{resultNumber10}</div>
                    </div>

                    <div className="flex justify-between my-2">
                        <div>
                            <span className="mr-3">11</span>
                            <input
                                type="text"
                                className="text-black rounded-sm focus:outline-none px-1 mr-2 w-28"
                                onChange={(e) => setName11(e.target.value)}
                                value={name11}
                                placeholder="Name"
                            />
                            <input
                                type="number"
                                className="text-black rounded-sm focus:outline-none px-1 mr-2 w-28"
                                onChange={(e) =>
                                    setNumber11Boss1(e.target.value)
                                }
                                value={number11Boss1}
                                placeholder="Gold Boss 1"
                            />
                            <input
                                type="number"
                                className="text-black rounded-sm focus:outline-none px-1 w-28"
                                onChange={(e) =>
                                    setNumber11Boss2(e.target.value)
                                }
                                value={number11Boss2}
                                placeholder="Gold Boss 2"
                            />
                        </div>
                        <div>{resultNumber11}</div>
                    </div>
                    <div className="flex justify-between my-2">
                        <div>
                            <span className="mr-3">12</span>
                            <input
                                type="text"
                                className="text-black rounded-sm focus:outline-none px-1 mr-2 w-28"
                                onChange={(e) => setName12(e.target.value)}
                                value={name12}
                                placeholder="Name"
                            />
                            <input
                                type="number"
                                className="text-black rounded-sm focus:outline-none px-1 mr-2 w-28"
                                onChange={(e) =>
                                    setNumber12Boss1(e.target.value)
                                }
                                value={number12Boss1}
                                placeholder="Gold Boss 1"
                            />
                            <input
                                type="number"
                                className="text-black rounded-sm focus:outline-none px-1 w-28"
                                onChange={(e) =>
                                    setNumber12Boss2(e.target.value)
                                }
                                value={number12Boss2}
                                placeholder="Gold Boss 2"
                            />
                        </div>
                        <div>{resultNumber12}</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
