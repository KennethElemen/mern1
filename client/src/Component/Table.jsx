import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/solid";
import { ArrowDownTrayIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  IconButton,
  Tooltip,
  Input,
} from "@material-tailwind/react";
import UpdatedUser from './UpdatedUser';

export default function Table({ Deletuser }) {
    const [data, setData] = useState([]);
    const [newUser, setNewUser] = useState({ no: '', vn: '', name: '', amount: '', date: '', address: '', descOfPayment: '', bankAcc: '', invoiceNo: '', preparedBy: '', accounting: '', approvedBy: '' });
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/get');
            setData(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleCreateUser = async () => {
        try {
            const response = await axios.post('http://localhost:8000/api/create', newUser);
            setData([...data, response.data.Newuser]);
            setNewUser({ no: '', vn: '', name: '', amount: '', date: '', address: '', descOfPayment: '', bankAcc: '', invoiceNo: '', preparedBy: '', accounting: '', approvedBy: '' });
        } catch (error) {
            console.error('Error creating user:', error);
        }
    };

    const handleUpdateUser = async (user) => {
        try {
            const response = await axios.put(`http://localhost:8000/api/update/${user._id}`, user);
            setData(data.map(item => item._id === user._id ? response.data.updateuser : item));
            setCurrentUser(null);
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    const handleDeleteUser = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/api/delete/${id}`);
            setData(data.filter(user => user._id !== id));
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    return (
        <>
            <Card className="h-full w-full">
                <CardHeader floated={false} shadow={false} className="rounded-none">
                    <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
                        <div>
                            <Typography variant="h5" color="blue-gray">
                                HR HERBS REPUBLIC
                            </Typography>
                            <Typography color="gray" className="mt-1 font-normal">
                                DISBURSEMENT VOUCHER
                            </Typography>
                        </div>
                        <div className="flex w-full shrink-0 gap-2 md:w-max">
                            <div className="w-full md:w-72">
                                <Input
                                    label="Search"
                                    icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                                />
                            </div>
                            <Button className="flex items-center gap-3" size="sm">
                                <ArrowDownTrayIcon strokeWidth={2} className="h-4 w-4" /> Download
                            </Button>
                            <Button className="flex items-center gap-3" size="sm" onClick={() => handleCreateUser()} data-bs-toggle="modal" data-bs-target="#addEmployeeModal">
                                <PlusIcon className="h-5 w-5" /> 
                            </Button>
                        </div>
                    </div>
                </CardHeader>
                <CardBody className="overflow-scroll px-0">
                    <table className="w-full min-w-max table-auto text-left">
                        <thead>
                            <tr>
                                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                                        No
                                    </Typography>
                                </th>
                                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                                        PAYMENT TO
                                    </Typography>
                                </th>
                                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                                        AMOUNT
                                    </Typography>
                                </th>
                                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                                        ADDRESS
                                    </Typography>
                                </th>
                                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                                        Actions
                                    </Typography>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.users?.map((elem, index) => {
                                const isLast = index === data.users.length - 1;
                                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
                                return (
                                    <tr key={elem._id}>
                                        <td className={classes}>
                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                {elem.no}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                {elem.name}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                {elem.amount}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                {elem.address}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Tooltip content="Edit User">
                                                <IconButton variant="text" onClick={() => setCurrentUser(elem)} data-bs-toggle="modal" data-bs-target="#editEmployeeModal">
                                                    <PencilIcon className="h-4 w-4" />
                                                </IconButton>
                                            </Tooltip>
                                            <Tooltip content="Delete User">
                                                <IconButton variant="text" onClick={() => handleDeleteUser(elem._id)} data-bs-toggle="modal" data-bs-target="#deleteEmployeeModal">
                                                    <TrashIcon className="h-4 w-4" />
                                                </IconButton>
                                            </Tooltip>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </CardBody>
            </Card>
            {currentUser && <UpdatedUser handleOnSubmit={handleUpdateUser} value={currentUser} handleChange={(e) => setCurrentUser({ ...currentUser, [e.target.name]: e.target.value })} />}
        </>
    );
}
