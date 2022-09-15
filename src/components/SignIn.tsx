import React, {useState, useEffect} from "react";
import axios from "axios";
import { Button, Label, TextInput } from "flowbite-react";

interface User {
    email: string,
    username: string,
    description: string,
    first_name: string,
    last_name: string,
    telephone_number:any,
    payment_method: string,
    rating: string
  }

const SignIn: React.FC = () => {

    const [data, setData] = useState<User>({
            email: '',
            username: '',
            description: '',
            first_name: '',
            last_name: '',
            telephone_number: 0,
            payment_method: '',
            rating: ''
        })

    const handleSubmit = async(e:any) => {
        //e.preventDefault()
        const userFormData = new FormData();
        userFormData.append("email", data.email)
        userFormData.append("username", data.username)
        userFormData.append("description", data.description)
        userFormData.append("first_name", data.first_name)
        userFormData.append("last_name", data.last_name)
        userFormData.append("telephone_number", data.telephone_number)
        userFormData.append("payment_method", data.payment_method)
        userFormData.append("rating", data.rating)

        try{
            const response = await axios({
                method: "POST",
                url: 'http://localhost:7000/api/users',
                //headers: {"Content-Type": "multipart/form-data"},
                data: userFormData
            })
            return response
        } catch(err) {
            console.error(err)
        }
    }

    const changeHandler = (e: any) => {
        const value = e.target.value
        setData({
            ...data,
            [e.target.name]: value
        })
    }

    return(
        
<form onSubmit={(e) => handleSubmit(e)} className="mx-5 my-5 flex flex-col gap-4">
    <div>
        <div className="mb-2 block">
            <Label
                htmlFor="email2"
                value="Your email"
            />
        </div>
        <TextInput
            id="email2"
            type="email"
            name="email"
            placeholder="name@email.com"
            value={data.email}
            onChange={changeHandler}
            required={true}
            shadow={true}
        />
    </div>
    <div>
        <div className="mb-2 block">
            <Label
                htmlFor="username"
                value="Your username"
            />
        </div>
        <TextInput
            id="username"
            name="username"
            value={data.username}
            onChange={changeHandler}
            required={true}
            shadow={true}
        />
    </div>
    <div>
        <div className="mb-2 block">
            <Label
                htmlFor="description"
                value="Channel description"
            />
        </div>
        <TextInput
            id="description"
            name="description"
            value={data.description}
            onChange={changeHandler}
            required={true}
            shadow={true}
        />
    </div>
    <div>
        <div className="mb-2 block">
            <Label
                htmlFor="first_name"
                value="Your name"
            />
        </div>
        <TextInput
            id="first_name"
            name="first_name"
            value={data.first_name}
            onChange={changeHandler}
            required={true}
            shadow={true}
        />
    </div>
    <div>
        <div className="mb-2 block">
            <Label
                htmlFor="last_name"
                value="Your last name"
            />
        </div>
        <TextInput
            id="last_name"
            name="last_name"
            value={data.last_name}
            onChange={changeHandler}
            required={true}
            shadow={true}
        />
    </div>
    <div>
        <div className="mb-2 block">
            <Label
                htmlFor="telephone_number"
                value="Your phone number"
            />
        </div>
        <TextInput
            id="telephone_number"
            name="telephone_number"
            value={data.telephone_number}
            onChange={changeHandler}
            required={true}
            shadow={true}
        />
    </div>
    <div>
        <div className="mb-2 block">
            <Label
                htmlFor="payment_method"
                value="Payment method"
            />
        </div>
        <TextInput
            id="payment_method"
            name="payment_method"
            value={data.payment_method}
            onChange={changeHandler}
            required={true}
            shadow={true}
        />
    </div>
    <div>
        <div className="mb-2 block">
            <Label
                htmlFor="rating"
                value="Rating"
            />
        </div>
        <TextInput
            id="rating"
            name="rating"
            value={data.rating}
            onChange={changeHandler}
            required={true}
            shadow={true}
        />
    </div>
    <Button type="submit">
        Register new account
    </Button>
</form>

    )
}

export default SignIn