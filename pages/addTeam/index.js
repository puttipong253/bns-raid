const AddTeam = () => {

    const options = [
        {
            value: "Class",
            label: "",
        },
        {
            value: "SM",
            label: "SM",
        },
        {
            value: "ASS",
            label: "ASS",
        },
        {
            value: "BM",
            label: "BM",
        },
        {
            value: "BD",
            label: "BD",
        },
        {
            value: "DB",
            label: "DB",
        },
        {
            value: "DT",
            label: "DT",
        },
        {
            value: "SS",
            label: "SS",
        },
        {
            value: "SG",
            label: "SG",
        },
        {
            value: "WL",
            label: "WL",
        },
        {
            value: "SF",
            label: "SF",
        },
        {
            value: "FM",
            label: "FM",
        },
        {
            value: "WD",
            label: "WD",
        },
        {
            value: "AC",
            label: "AC",
        },
    ];

    return (
        <>
            <div className="bg-gray-800 p-7 rounded-md text-white">
                <div className="flex justify-between border-b mb-10 pb-5">
                    <div className="text-lg">ADD MEMBER RAID</div>
                    <button className=" bg-amber-500 px-3 py-1 rounded-md">SAVE</button>
                </div>

                <div className="my-4">
                    <span className="mr-5">1.</span>
                    <input
                        className="px-3 rounded-sm mr-5 focus:outline-none py-1"
                        type="text"
                        placeholder="Name"
                    />
                    <select
                        className="text-black px-3 py-1 w-40 rounded-sm mr-5 focus:outline-none"
                        style={{ height: "33px" }}
                    >
                        {options.map((item) => (
                            <option value={item.value}>{item.value}</option>
                        ))}
                    </select>
                </div>

                <div className="my-4">
                    <span className="mr-5">2.</span>
                    <input
                        className="px-3 rounded-sm mr-5 focus:outline-none py-1"
                        type="text"
                        placeholder="Name"
                    />
                    <select
                        className="text-black px-3 py-1 w-40 rounded-sm mr-5 focus:outline-none"
                        style={{ height: "33px" }}
                    >
                        {options.map((item) => (
                            <option value={item.value}>{item.value}</option>
                        ))}
                    </select>
                </div>

                <div className="my-4">
                    <span className="mr-5">3.</span>
                    <input
                        className="px-3 rounded-sm mr-5 focus:outline-none py-1"
                        type="text"
                        placeholder="Name"
                    />
                    <select
                        className="text-black px-3 py-1 w-40 rounded-sm mr-5 focus:outline-none"
                        style={{ height: "33px" }}
                    >
                        {options.map((item) => (
                            <option value={item.value}>{item.value}</option>
                        ))}
                    </select>
                </div>

                <div className="my-4">
                    <span className="mr-5">4.</span>
                    <input
                        className="px-3 rounded-sm mr-5 focus:outline-none py-1"
                        type="text"
                        placeholder="Name"
                    />
                    <select
                        className="text-black px-3 py-1 w-40 rounded-sm mr-5 focus:outline-none"
                        style={{ height: "33px" }}
                    >
                        {options.map((item) => (
                            <option value={item.value}>{item.value}</option>
                        ))}
                    </select>
                </div>

                <div className="my-4">
                    <span className="mr-5">5.</span>
                    <input
                        className="px-3 rounded-sm mr-5 focus:outline-none py-1"
                        type="text"
                        placeholder="Name"
                    />
                    <select
                        className="text-black px-3 py-1 w-40 rounded-sm mr-5 focus:outline-none"
                        style={{ height: "33px" }}
                    >
                        {options.map((item) => (
                            <option value={item.value}>{item.value}</option>
                        ))}
                    </select>
                </div>

                <div className="my-4">
                    <span className="mr-5">6.</span>
                    <input
                        className="px-3 rounded-sm mr-5 focus:outline-none py-1"
                        type="text"
                        placeholder="Name"
                    />
                    <select
                        className="text-black px-3 py-1 w-40 rounded-sm mr-5 focus:outline-none"
                        style={{ height: "33px" }}
                    >
                        {options.map((item) => (
                            <option value={item.value}>{item.value}</option>
                        ))}
                    </select>
                </div>

                <div className="my-4">
                    <span className="mr-5">7.</span>
                    <input
                        className="px-3 rounded-sm mr-5 focus:outline-none py-1"
                        type="text"
                        placeholder="Name"
                    />
                    <select
                        className="text-black px-3 py-1 w-40 rounded-sm mr-5 focus:outline-none"
                        style={{ height: "33px" }}
                    >
                        {options.map((item) => (
                            <option value={item.value}>{item.value}</option>
                        ))}
                    </select>
                </div>

                <div className="my-4">
                    <span className="mr-5">8.</span>
                    <input
                        className="px-3 rounded-sm mr-5 focus:outline-none py-1"
                        type="text"
                        placeholder="Name"
                    />
                    <select
                        className="text-black px-3 py-1 w-40 rounded-sm mr-5 focus:outline-none"
                        style={{ height: "33px" }}
                    >
                        {options.map((item) => (
                            <option value={item.value}>{item.value}</option>
                        ))}
                    </select>
                </div>

                <div className="my-4">
                    <span className="mr-5">9.</span>
                    <input
                        className="px-3 rounded-sm mr-5 focus:outline-none py-1"
                        type="text"
                        placeholder="Name"
                    />
                    <select
                        className="text-black px-3 py-1 w-40 rounded-sm mr-5 focus:outline-none"
                        style={{ height: "33px" }}
                    >
                        {options.map((item) => (
                            <option value={item.value}>{item.value}</option>
                        ))}
                    </select>
                </div>

                <div className="my-4">
                    <span className="mr-5">10.</span>
                    <input
                        className="px-3 rounded-sm mr-5 focus:outline-none py-1"
                        type="text"
                        placeholder="Name"
                    />
                    <select
                        className="text-black px-3 py-1 w-40 rounded-sm mr-5 focus:outline-none"
                        style={{ height: "33px" }}
                    >
                        {options.map((item) => (
                            <option value={item.value}>{item.value}</option>
                        ))}
                    </select>
                </div>

                <div className="my-4">
                    <span className="mr-5">11.</span>
                    <input
                        className="px-3 rounded-sm mr-5 focus:outline-none py-1"
                        type="text"
                        placeholder="Name"
                    />
                    <select
                        className="text-black px-3 py-1 w-40 rounded-sm mr-5 focus:outline-none"
                        style={{ height: "33px" }}
                    >
                        {options.map((item) => (
                            <option value={item.value}>{item.value}</option>
                        ))}
                    </select>
                </div>

                <div className="my-4">
                    <span className="mr-5">12.</span>
                    <input
                        className="px-3 rounded-sm mr-5 focus:outline-none py-1"
                        type="text"
                        placeholder="Name"
                    />
                    <select
                        className="text-black px-3 py-1 w-40 rounded-sm mr-5 focus:outline-none"
                        style={{ height: "33px" }}
                    >
                        {options.map((item) => (
                            <option value={item.value}>{item.value}</option>
                        ))}
                    </select>
                </div>
            </div>
        </>
    );
};

export default AddTeam;
