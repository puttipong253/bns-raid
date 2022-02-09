import { useState } from "react";
import Swal from "sweetalert2";

const Home = () => {
    const [memberCount, setMembercount] = useState(12);

    const [number1Boss1, setNumber1Boss1] = useState("");
    const [number1Boss2, setNumber1Boss2] = useState("");
    const [number1Boss3, setNumber1Boss3] = useState("");
    const [number1Boss4, setNumber1Boss4] = useState("");
    const [resultNumber1, setResultNumber1] = useState(0);

    const [number2Boss1, setNumber2Boss1] = useState("");
    const [number2Boss2, setNumber2Boss2] = useState("");
    const [number2Boss3, setNumber2Boss3] = useState("");
    const [number2Boss4, setNumber2Boss4] = useState("");
    const [resultNumber2, setResultNumber2] = useState(0);

    const [number3Boss1, setNumber3Boss1] = useState("");
    const [number3Boss2, setNumber3Boss2] = useState("");
    const [number3Boss3, setNumber3Boss3] = useState("");
    const [number3Boss4, setNumber3Boss4] = useState("");
    const [resultNumber3, setResultNumber3] = useState(0);

    const [number4Boss1, setNumber4Boss1] = useState("");
    const [number4Boss2, setNumber4Boss2] = useState("");
    const [number4Boss3, setNumber4Boss3] = useState("");
    const [number4Boss4, setNumber4Boss4] = useState("");
    const [resultNumber4, setResultNumber4] = useState(0);

    const [number5Boss1, setNumber5Boss1] = useState("");
    const [number5Boss2, setNumber5Boss2] = useState("");
    const [number5Boss3, setNumber5Boss3] = useState("");
    const [number5Boss4, setNumber5Boss4] = useState("");
    const [resultNumber5, setResultNumber5] = useState(0);

    const [number6Boss1, setNumber6Boss1] = useState("");
    const [number6Boss2, setNumber6Boss2] = useState("");
    const [number6Boss3, setNumber6Boss3] = useState("");
    const [number6Boss4, setNumber6Boss4] = useState("");
    const [resultNumber6, setResultNumber6] = useState(0);

    const [number7Boss1, setNumber7Boss1] = useState("");
    const [number7Boss2, setNumber7Boss2] = useState("");
    const [number7Boss3, setNumber7Boss3] = useState("");
    const [number7Boss4, setNumber7Boss4] = useState("");
    const [resultNumber7, setResultNumber7] = useState(0);

    const [number8Boss1, setNumber8Boss1] = useState("");
    const [number8Boss2, setNumber8Boss2] = useState("");
    const [number8Boss3, setNumber8Boss3] = useState("");
    const [number8Boss4, setNumber8Boss4] = useState("");
    const [resultNumber8, setResultNumber8] = useState(0);

    const [number9Boss1, setNumber9Boss1] = useState("");
    const [number9Boss2, setNumber9Boss2] = useState("");
    const [number9Boss3, setNumber9Boss3] = useState("");
    const [number9Boss4, setNumber9Boss4] = useState("");
    const [resultNumber9, setResultNumber9] = useState(0);

    const [number10Boss1, setNumber10Boss1] = useState("");
    const [number10Boss2, setNumber10Boss2] = useState("");
    const [number10Boss3, setNumber10Boss3] = useState("");
    const [number10Boss4, setNumber10Boss4] = useState("");
    const [resultNumber10, setResultNumber10] = useState(0);

    const [number11Boss1, setNumber11Boss1] = useState("");
    const [number11Boss2, setNumber11Boss2] = useState("");
    const [number11Boss3, setNumber11Boss3] = useState("");
    const [number11Boss4, setNumber11Boss4] = useState("");
    const [resultNumber11, setResultNumber11] = useState(0);

    const [number12Boss1, setNumber12Boss1] = useState("");
    const [number12Boss2, setNumber12Boss2] = useState("");
    const [number12Boss3, setNumber12Boss3] = useState("");
    const [number12Boss4, setNumber12Boss4] = useState("");
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
        const member1 =
            Number(number1Boss1) +
            Number(number1Boss2) +
            Number(number1Boss3) +
            Number(number1Boss4);
        const member2 =
            Number(number2Boss1) +
            Number(number2Boss2) +
            Number(number2Boss3) +
            Number(number2Boss4);
        const member3 =
            Number(number3Boss1) +
            Number(number3Boss2) +
            Number(number3Boss3) +
            Number(number3Boss4);
        const member4 =
            Number(number4Boss1) +
            Number(number4Boss2) +
            Number(number4Boss3) +
            Number(number4Boss4);
        const member5 =
            Number(number5Boss1) +
            Number(number5Boss2) +
            Number(number5Boss3) +
            Number(number5Boss4);
        const member6 =
            Number(number6Boss1) +
            Number(number6Boss2) +
            Number(number6Boss3) +
            Number(number6Boss4);
        const member7 =
            Number(number7Boss1) +
            Number(number7Boss2) +
            Number(number7Boss3) +
            Number(number7Boss4);
        const member8 =
            Number(number8Boss1) +
            Number(number8Boss2) +
            Number(number8Boss3) +
            Number(number8Boss4);
        const member9 =
            Number(number9Boss1) +
            Number(number9Boss2) +
            Number(number9Boss3) +
            Number(number9Boss4);
        const member10 =
            Number(number10Boss1) +
            Number(number10Boss2) +
            Number(number10Boss3) +
            Number(number10Boss4);
        const member11 =
            Number(number11Boss1) +
            Number(number11Boss2) +
            Number(number11Boss3) +
            Number(number11Boss4);
        const member12 =
            Number(number12Boss1) +
            Number(number12Boss2) +
            Number(number12Boss3) +
            Number(number12Boss4);

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

        const count = Number(memberCount) - 1;

        if (member1 !== 0) {
            const res1 = Number(member1) / count;
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
            const res2 = Number(member2) / count;
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
            const res3 = Number(member3) / count;
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
            const res4 = Number(member4) / count;
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
            const res5 = Number(member5) / count;
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
            const res6 = Number(member6) / count;
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
            const res4 = Number(member7) / count;
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
            const res8 = Number(member8) / count;
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
            const res9 = Number(member9) / count;
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
            const res10 = Number(member10) / count;
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
            const res11 = Number(member11) / count;
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
            const res12 = Number(member12) / count;
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
        Swal.fire({
            title: "คุณต้องการรีเซ็ตค่าทั้งหมดใช่หรือไม่ !",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes",
        }).then((result) => {
            if (result.isConfirmed) {
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

                setNumber1Boss3("");
                setNumber2Boss3("");
                setNumber3Boss3("");
                setNumber4Boss3("");
                setNumber5Boss3("");
                setNumber6Boss3("");
                setNumber7Boss3("");
                setNumber8Boss3("");
                setNumber9Boss3("");
                setNumber10Boss3("");
                setNumber11Boss3("");
                setNumber12Boss3("");

                setNumber1Boss4("");
                setNumber2Boss4("");
                setNumber3Boss4("");
                setNumber4Boss4("");
                setNumber5Boss4("");
                setNumber6Boss4("");
                setNumber7Boss4("");
                setNumber8Boss4("");
                setNumber9Boss4("");
                setNumber10Boss4("");
                setNumber11Boss4("");
                setNumber12Boss4("");

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

                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Successfully",
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        });
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
                    <div>
                        <label htmlFor="">Member Count</label>
                        <select
                            value={memberCount}
                            onChange={(e) => setMembercount(e.target.value)}
                            className="w-14 text-black focus:outline-none rounded-sm ml-2 mb-3"
                        >
                            <option value="12">12</option>
                            <option value="11">11</option>
                            <option value="10">10</option>
                            <option value="9">9</option>
                            <option value="8">8</option>
                            <option value="7">7</option>
                            <option value="6">6</option>
                            <option value="5">5</option>
                            <option value="4">4</option>
                            <option value="3">3</option>
                            <option value="2">2</option>
                            <option value="1">1</option>
                        </select>
                    </div>

                    {memberCount >= 1 && (
                        <div className="flex justify-between my-3">
                            <div className="flex">
                                <div className="w-6 text-center">1</div>
                                <input
                                    type="text"
                                    className="text-black rounded-sm focus:outline-none px-1 mr-4 w-28"
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
                                    placeholder="Gold 1"
                                />
                                <input
                                    type="number"
                                    className="text-black rounded-sm focus:outline-none px-1 mr-2 w-28"
                                    onChange={(e) =>
                                        setNumber1Boss2(e.target.value)
                                    }
                                    value={number1Boss2}
                                    placeholder="Gold 2"
                                />
                                <input
                                    type="number"
                                    className="text-black rounded-sm focus:outline-none px-1 mr-2 w-28"
                                    onChange={(e) =>
                                        setNumber1Boss3(e.target.value)
                                    }
                                    value={number1Boss3}
                                    placeholder="Gold 3"
                                />
                                <input
                                    type="number"
                                    className="text-black rounded-sm focus:outline-none px-1 w-28"
                                    onChange={(e) =>
                                        setNumber1Boss4(e.target.value)
                                    }
                                    value={number1Boss4}
                                    placeholder="Gold 4"
                                />
                                <span className="ml-3">
                                    เงินที่ต้องจ่าย :{" "}
                                    {Number(number1Boss1) +
                                        Number(number1Boss2) +
                                        Number(number1Boss3) +
                                        Number(number1Boss4)}
                                </span>
                            </div>
                            <div>เงินที่ได้ : {resultNumber1}</div>
                        </div>
                    )}

                    {memberCount >= 2 && (
                        <div className="flex justify-between my-3">
                            <div className="flex">
                                <div className="w-6 text-center">2</div>
                                <input
                                    type="text"
                                    className="text-black rounded-sm focus:outline-none px-1 mr-4 w-28"
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
                                    placeholder="Gold 1"
                                />
                                <input
                                    type="number"
                                    className="text-black rounded-sm focus:outline-none px-1 mr-2 w-28"
                                    onChange={(e) =>
                                        setNumber2Boss2(e.target.value)
                                    }
                                    value={number2Boss2}
                                    placeholder="Gold 2"
                                />
                                <input
                                    type="number"
                                    className="text-black rounded-sm focus:outline-none px-1 mr-2 w-28"
                                    onChange={(e) =>
                                        setNumber2Boss3(e.target.value)
                                    }
                                    value={number2Boss3}
                                    placeholder="Gold 3"
                                />
                                <input
                                    type="number"
                                    className="text-black rounded-sm focus:outline-none px-1 w-28"
                                    onChange={(e) =>
                                        setNumber2Boss4(e.target.value)
                                    }
                                    value={number2Boss4}
                                    placeholder="Gold 4"
                                />
                                <span className="ml-3">
                                    เงินที่ต้องจ่าย :{" "}
                                    {Number(number2Boss1) +
                                        Number(number2Boss2) +
                                        Number(number2Boss3) +
                                        Number(number2Boss4)}
                                </span>
                            </div>
                            <div>เงินที่ได้ : {resultNumber2}</div>
                        </div>
                    )}

                    {memberCount >= 3 && (
                        <div className="flex justify-between my-3">
                            <div className="flex">
                                <div className="w-6 text-center">3</div>
                                <input
                                    type="text"
                                    className="text-black rounded-sm focus:outline-none px-1 mr-4 w-28"
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
                                    placeholder="Gold 1"
                                />
                                <input
                                    type="number"
                                    className="text-black rounded-sm focus:outline-none px-1 mr-2 w-28"
                                    onChange={(e) =>
                                        setNumber3Boss2(e.target.value)
                                    }
                                    value={number3Boss2}
                                    placeholder="Gold 2"
                                />
                                <input
                                    type="number"
                                    className="text-black rounded-sm focus:outline-none px-1 mr-2 w-28"
                                    onChange={(e) =>
                                        setNumber3Boss3(e.target.value)
                                    }
                                    value={number3Boss3}
                                    placeholder="Gold 3"
                                />
                                <input
                                    type="number"
                                    className="text-black rounded-sm focus:outline-none px-1 w-28"
                                    onChange={(e) =>
                                        setNumber3Boss4(e.target.value)
                                    }
                                    value={number3Boss4}
                                    placeholder="Gold 4"
                                />
                                <span className="ml-3">
                                    เงินที่ต้องจ่าย :{" "}
                                    {Number(number3Boss1) +
                                        Number(number3Boss2) +
                                        Number(number3Boss3) +
                                        Number(number3Boss4)}
                                </span>
                            </div>
                            <div>เงินที่ได้ : {resultNumber3}</div>
                        </div>
                    )}

                    {memberCount >= 4 && (
                        <div className="flex justify-between my-3">
                            <div className="flex">
                                <div className="w-6 text-center">4</div>
                                <input
                                    type="text"
                                    className="text-black rounded-sm focus:outline-none px-1 mr-4 w-28"
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
                                    placeholder="Gold 1"
                                />
                                <input
                                    type="number"
                                    className="text-black rounded-sm focus:outline-none px-1 mr-2 w-28"
                                    onChange={(e) =>
                                        setNumber4Boss2(e.target.value)
                                    }
                                    value={number4Boss2}
                                    placeholder="Gold 2"
                                />
                                <input
                                    type="number"
                                    className="text-black rounded-sm focus:outline-none px-1 mr-2 w-28"
                                    onChange={(e) =>
                                        setNumber4Boss3(e.target.value)
                                    }
                                    value={number4Boss3}
                                    placeholder="Gold 3"
                                />
                                <input
                                    type="number"
                                    className="text-black rounded-sm focus:outline-none px-1 w-28"
                                    onChange={(e) =>
                                        setNumber4Boss4(e.target.value)
                                    }
                                    value={number4Boss4}
                                    placeholder="Gold 4"
                                />
                                <span className="ml-3">
                                    เงินที่ต้องจ่าย :{" "}
                                    {Number(number4Boss1) +
                                        Number(number4Boss2) +
                                        Number(number4Boss3) +
                                        Number(number4Boss4)}
                                </span>
                            </div>
                            <div>เงินที่ได้ : {resultNumber4}</div>
                        </div>
                    )}

                    {memberCount >= 5 && (
                        <div className="flex justify-between my-3">
                            <div className="flex">
                                <div className="w-6 text-center">5</div>
                                <input
                                    type="text"
                                    className="text-black rounded-sm focus:outline-none px-1 mr-4 w-28"
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
                                    placeholder="Gold 1"
                                />
                                <input
                                    type="number"
                                    className="text-black rounded-sm focus:outline-none px-1 mr-2 w-28"
                                    onChange={(e) =>
                                        setNumber5Boss2(e.target.value)
                                    }
                                    value={number5Boss2}
                                    placeholder="Gold 2"
                                />
                                <input
                                    type="number"
                                    className="text-black rounded-sm focus:outline-none px-1 mr-2 w-28"
                                    onChange={(e) =>
                                        setNumber5Boss3(e.target.value)
                                    }
                                    value={number5Boss3}
                                    placeholder="Gold 3"
                                />
                                <input
                                    type="number"
                                    className="text-black rounded-sm focus:outline-none px-1 w-28"
                                    onChange={(e) =>
                                        setNumber5Boss4(e.target.value)
                                    }
                                    value={number5Boss4}
                                    placeholder="Gold 4"
                                />
                                <span className="ml-3">
                                    เงินที่ต้องจ่าย :{" "}
                                    {Number(number5Boss1) +
                                        Number(number5Boss2) +
                                        Number(number5Boss3) +
                                        Number(number5Boss4)}
                                </span>
                            </div>
                            <div>เงินที่ได้ : {resultNumber5}</div>
                        </div>
                    )}

                    {memberCount >= 6 && (
                        <div className="flex justify-between my-3">
                            <div className="flex">
                                <div className="w-6 text-center">6</div>
                                <input
                                    type="text"
                                    className="text-black rounded-sm focus:outline-none px-1 mr-4 w-28"
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
                                    placeholder="Gold 1"
                                />
                                <input
                                    type="number"
                                    className="text-black rounded-sm focus:outline-none px-1 mr-2 w-28"
                                    onChange={(e) =>
                                        setNumber6Boss2(e.target.value)
                                    }
                                    value={number6Boss2}
                                    placeholder="Gold 2"
                                />
                                <input
                                    type="number"
                                    className="text-black rounded-sm focus:outline-none px-1 mr-2 w-28"
                                    onChange={(e) =>
                                        setNumber6Boss3(e.target.value)
                                    }
                                    value={number6Boss3}
                                    placeholder="Gold 3"
                                />
                                <input
                                    type="number"
                                    className="text-black rounded-sm focus:outline-none px-1 w-28"
                                    onChange={(e) =>
                                        setNumber6Boss4(e.target.value)
                                    }
                                    value={number6Boss4}
                                    placeholder="Gold 4"
                                />
                                <span className="ml-3">
                                    เงินที่ต้องจ่าย :{" "}
                                    {Number(number6Boss1) +
                                        Number(number6Boss2) +
                                        Number(number6Boss3) +
                                        Number(number6Boss4)}
                                </span>
                            </div>
                            <div>เงินที่ได้ : {resultNumber6}</div>
                        </div>
                    )}

                    {memberCount >= 7 && (
                        <div className="flex justify-between my-3">
                            <div className="flex">
                                <div className="w-6 text-center">7</div>
                                <input
                                    type="text"
                                    className="text-black rounded-sm focus:outline-none px-1 mr-4 w-28"
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
                                    placeholder="Gold 1"
                                />
                                <input
                                    type="number"
                                    className="text-black rounded-sm focus:outline-none px-1 mr-2 w-28"
                                    onChange={(e) =>
                                        setNumber7Boss2(e.target.value)
                                    }
                                    value={number7Boss2}
                                    placeholder="Gold 2"
                                />
                                <input
                                    type="number"
                                    className="text-black rounded-sm focus:outline-none px-1 mr-2 w-28"
                                    onChange={(e) =>
                                        setNumber7Boss3(e.target.value)
                                    }
                                    value={number7Boss3}
                                    placeholder="Gold 3"
                                />
                                <input
                                    type="number"
                                    className="text-black rounded-sm focus:outline-none px-1 w-28"
                                    onChange={(e) =>
                                        setNumber7Boss4(e.target.value)
                                    }
                                    value={number7Boss4}
                                    placeholder="Gold 4"
                                />
                                <span className="ml-3">
                                    เงินที่ต้องจ่าย :{" "}
                                    {Number(number7Boss1) +
                                        Number(number7Boss2) +
                                        Number(number7Boss3) +
                                        Number(number7Boss4)}
                                </span>
                            </div>
                            <div>เงินที่ได้ : {resultNumber7}</div>
                        </div>
                    )}

                    {memberCount >= 8 && (
                        <div className="flex justify-between my-3">
                            <div className="flex">
                                <div className="w-6 text-center">8</div>
                                <input
                                    type="text"
                                    className="text-black rounded-sm focus:outline-none px-1 mr-4 w-28"
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
                                    placeholder="Gold 1"
                                />
                                <input
                                    type="number"
                                    className="text-black rounded-sm focus:outline-none px-1 mr-2 w-28"
                                    onChange={(e) =>
                                        setNumber8Boss2(e.target.value)
                                    }
                                    value={number8Boss2}
                                    placeholder="Gold 2"
                                />
                                <input
                                    type="number"
                                    className="text-black rounded-sm focus:outline-none px-1 mr-2 w-28"
                                    onChange={(e) =>
                                        setNumber8Boss3(e.target.value)
                                    }
                                    value={number8Boss3}
                                    placeholder="Gold 3"
                                />
                                <input
                                    type="number"
                                    className="text-black rounded-sm focus:outline-none px-1 w-28"
                                    onChange={(e) =>
                                        setNumber8Boss4(e.target.value)
                                    }
                                    value={number8Boss4}
                                    placeholder="Gold 4"
                                />
                                <span className="ml-3">
                                    เงินที่ต้องจ่าย :{" "}
                                    {Number(number8Boss1) +
                                        Number(number8Boss2) +
                                        Number(number8Boss3) +
                                        Number(number8Boss4)}
                                </span>
                            </div>
                            <div>เงินที่ได้ : {resultNumber8}</div>
                        </div>
                    )}

                    {memberCount >= 9 && (
                        <div className="flex justify-between my-3">
                            <div className="flex">
                                <div className="w-6 text-center">9</div>
                                <input
                                    type="text"
                                    className="text-black rounded-sm focus:outline-none px-1 mr-4 w-28"
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
                                    placeholder="Gold 1"
                                />
                                <input
                                    type="number"
                                    className="text-black rounded-sm focus:outline-none px-1 mr-2 w-28"
                                    onChange={(e) =>
                                        setNumber9Boss2(e.target.value)
                                    }
                                    value={number9Boss2}
                                    placeholder="Gold 2"
                                />
                               <input
                                    type="number"
                                    className="text-black rounded-sm focus:outline-none px-1 mr-2 w-28"
                                    onChange={(e) =>
                                        setNumber9Boss3(e.target.value)
                                    }
                                    value={number9Boss3}
                                    placeholder="Gold 3"
                                />
                                <input
                                    type="number"
                                    className="text-black rounded-sm focus:outline-none px-1 w-28"
                                    onChange={(e) =>
                                        setNumber9Boss4(e.target.value)
                                    }
                                    value={number9Boss4}
                                    placeholder="Gold 4"
                                />
                                <span className="ml-3">
                                    เงินที่ต้องจ่าย :{" "}
                                    {Number(number9Boss1) +
                                        Number(number9Boss2) +
                                        Number(number9Boss3) +
                                        Number(number9Boss4)}
                                </span>
                            </div>
                            <div>เงินที่ได้ : {resultNumber9}</div>
                        </div>
                    )}

                    {memberCount >= 10 && (
                        <div className="flex justify-between my-3">
                            <div className="flex">
                                <div className="w-6 text-center">10</div>
                                <input
                                    type="text"
                                    className="text-black rounded-sm focus:outline-none px-1 mr-4 w-28"
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
                                    placeholder="Gold 1"
                                />
                                <input
                                    type="number"
                                    className="text-black rounded-sm focus:outline-none px-1 mr-2 w-28"
                                    onChange={(e) =>
                                        setNumber10Boss2(e.target.value)
                                    }
                                    value={number10Boss2}
                                    placeholder="Gold 2"
                                />
                                <input
                                    type="number"
                                    className="text-black rounded-sm focus:outline-none px-1 mr-2 w-28"
                                    onChange={(e) =>
                                        setNumber10Boss3(e.target.value)
                                    }
                                    value={number10Boss3}
                                    placeholder="Gold 3"
                                />
                                <input
                                    type="number"
                                    className="text-black rounded-sm focus:outline-none px-1 w-28"
                                    onChange={(e) =>
                                        setNumber10Boss4(e.target.value)
                                    }
                                    value={number10Boss4}
                                    placeholder="Gold 4"
                                />
                                <span className="ml-3">
                                    เงินที่ต้องจ่าย :{" "}
                                    {Number(number10Boss1) +
                                        Number(number10Boss2) +
                                        Number(number10Boss3) +
                                        Number(number10Boss4)}
                                </span>
                            </div>
                            <div>เงินที่ได้ : {resultNumber10}</div>
                        </div>
                    )}

                    {memberCount >= 11 && (
                        <div className="flex justify-between my-3">
                            <div className="flex">
                                <div className="w-6 text-center">11</div>
                                <input
                                    type="text"
                                    className="text-black rounded-sm focus:outline-none px-1 mr-4 w-28"
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
                                    placeholder="Gold 1"
                                />
                                <input
                                    type="number"
                                    className="text-black rounded-sm focus:outline-none px-1 mr-2 w-28"
                                    onChange={(e) =>
                                        setNumber11Boss2(e.target.value)
                                    }
                                    value={number11Boss2}
                                    placeholder="Gold 2"
                                />
                               <input
                                    type="number"
                                    className="text-black rounded-sm focus:outline-none px-1 mr-2 w-28"
                                    onChange={(e) =>
                                        setNumber11Boss3(e.target.value)
                                    }
                                    value={number11Boss3}
                                    placeholder="Gold 3"
                                />
                                <input
                                    type="number"
                                    className="text-black rounded-sm focus:outline-none px-1 w-28"
                                    onChange={(e) =>
                                        setNumber11Boss4(e.target.value)
                                    }
                                    value={number11Boss4}
                                    placeholder="Gold 4"
                                />
                                <span className="ml-3">
                                    เงินที่ต้องจ่าย :{" "}
                                    {Number(number11Boss1) +
                                        Number(number11Boss2) +
                                        Number(number11Boss3) +
                                        Number(number11Boss4)}
                                </span>
                            </div>
                            <div>เงินที่ได้ : {resultNumber11}</div>
                        </div>
                    )}

                    {memberCount >= 12 && (
                        <div className="flex justify-between my-3">
                            <div className="flex">
                                <div className="w-6 text-center">12</div>
                                <input
                                    type="text"
                                    className="text-black rounded-sm focus:outline-none px-1 mr-4 w-28"
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
                                    placeholder="Gold 1"
                                />
                                <input
                                    type="number"
                                    className="text-black rounded-sm focus:outline-none px-1 mr-2 w-28"
                                    onChange={(e) =>
                                        setNumber12Boss2(e.target.value)
                                    }
                                    value={number12Boss2}
                                    placeholder="Gold 2"
                                />
                                <input
                                    type="number"
                                    className="text-black rounded-sm focus:outline-none px-1 mr-2 w-28"
                                    onChange={(e) =>
                                        setNumber12Boss3(e.target.value)
                                    }
                                    value={number12Boss3}
                                    placeholder="Gold 3"
                                />
                                <input
                                    type="number"
                                    className="text-black rounded-sm focus:outline-none px-1 w-28"
                                    onChange={(e) =>
                                        setNumber12Boss4(e.target.value)
                                    }
                                    value={number12Boss4}
                                    placeholder="Gold 4"
                                />
                                <span className="ml-3">
                                    เงินที่ต้องจ่าย :{" "}
                                    {Number(number12Boss1) +
                                        Number(number12Boss2) +
                                        Number(number12Boss3) +
                                        Number(number12Boss4)}
                                </span>
                            </div>
                            <div>เงินที่ได้ : {resultNumber12}</div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Home;
