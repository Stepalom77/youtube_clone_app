import { Table } from "flowbite-react";
import React, {useState, useEffect} from "react";
import axios from "axios";
interface User {
    _id: any,
    first_name: string,
    last_name: string,
    email: string,
    username: string,
    telephone_number:number,
    description: string,
    payment_method: string,
    rating: string
  }

const Info:React.FC = () => {
    const [user, setUser] = useState<User>(Object)
    useEffect(() => {
        const fetchUser = async() => {
            try {
                const response = await axios.get<User>('http://localhost:7000/api/users/631fe4bfed9eb772e211481c')
                setUser(response.data)
            } catch(err) {
                console.error(err)
            }
        }
        fetchUser()
    }, [])
    return(
        <Table className="mx-5 my-5">
            <Table.Body className="divide-y">
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         First name
                    </Table.Cell>
                    <Table.Cell>
                        {user.first_name}
                    </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        Last name
                    </Table.Cell>
                    <Table.Cell>
                        {user.last_name}
                    </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        Email
                    </Table.Cell>
                    <Table.Cell>
                       {user.email}
                    </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        Username
                    </Table.Cell>
                    <Table.Cell>
                        {user.username}
                    </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        Telephone number
                    </Table.Cell>
                    <Table.Cell>
                        {user.telephone_number}
                    </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        Payment method
                    </Table.Cell>
                    <Table.Cell>
                        {user.payment_method}
                    </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        Rating
                    </Table.Cell>
                    <Table.Cell>
                        {user.rating}
                    </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        Description
                    </Table.Cell>
                    <Table.Cell>
                        {user.description}
                    </Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    )
}

export default Info