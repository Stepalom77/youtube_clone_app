import { Table } from "flowbite-react";
import React, {useState, useEffect} from "react";

const Info:React.FC = () => {
    const [firstName, setFirstName] = useState('first name')
    const [lastName, setLastName] = useState('last name')
    const [email, setEmail] = useState('email')
    const [username, setUsername] = useState('username')
    const [telephoneNumber, setTelephoneNumber] = useState('telephone number')
    const [paymentMethod, setPaymentMethod] = useState('payment method')
    const [rating, setRating] = useState('rating')
    const [description, setDescription] = useState('channel description')
    return(
        <Table className="mx-5 my-5">
            <Table.Body className="divide-y">
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         First name
                    </Table.Cell>
                    <Table.Cell>
                        {firstName}
                    </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        Last name
                    </Table.Cell>
                    <Table.Cell>
                        {lastName}
                    </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        Email
                    </Table.Cell>
                    <Table.Cell>
                        {email}
                    </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        Username
                    </Table.Cell>
                    <Table.Cell>
                        {username}
                    </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        Telephone number
                    </Table.Cell>
                    <Table.Cell>
                        {telephoneNumber}
                    </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        Payment method
                    </Table.Cell>
                    <Table.Cell>
                        {paymentMethod}
                    </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        Rating
                    </Table.Cell>
                    <Table.Cell>
                        {rating}
                    </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        Description
                    </Table.Cell>
                    <Table.Cell>
                        {description}
                    </Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    )
}

export default Info