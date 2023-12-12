"use client";
import './register.css'
import Link from 'next/link'
import { UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Select } from 'antd';


const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
console.log('Failed:', errorInfo);
};

const { Option } = Select;


export default function Register() {
    return (
        <div>
            <div className="registerForm">
                <div><h1>Inscription</h1></div>
                <Form
                    name="basic"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    >
                    <div className='input'>
                        <Form.Item
                            label="Matricule"
                            name="matricule"
                            rules={[
                                {
                                required: true,
                                message: 'Champ obligatoire',
                                },
                            ]}
                        >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} />
                        </Form.Item>
                    </div>

                    <div className='input'>
                        <Form.Item
                        label="Nom"
                        name="nom"
                        rules={[
                            {
                            required: true,
                            message: 'Champ obligatoire',
                            },
                        ]}
                        >
                        <Input />
                        </Form.Item>
                    </div>

                    <div className='input'>
                        <Form.Item
                        label="Prénom"
                        name="prenom"
                        rules={[
                            {
                            required: true,
                            message: 'Champ obligatoire',
                            },
                        ]}
                        >
                        <Input />
                        </Form.Item>
                    </div>

                    <div className='input'>
                        <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                            required: true,
                            message: 'Champ obligatoire',
                            },
                        ]}
                        >
                        <Input />
                        </Form.Item>
                    </div>

                    <div className='input'>
                        <Form.Item name="roles" label="Rôle" rules={[
                            { required: true,message: 'Champ obligatoire' 
                            }]}
                        >
                            <Select
                                placeholder="Choississez un rôle "
                                allowClear
                            >
                                <Option value="ROLE_CHEF">{"Chef d'équipe"}</Option>
                                <Option value="ROLE_CONTROLEUR">Contrôleur Qualité</Option>
                                <Option value="ROLE_MANAGER">CI Manager</Option>
                                <Option value="ROLE_REMPLACANT">Remplaçant</Option>
                                <Option value="ROLE_RESPONSABLE">Responsable de Production</Option>
                                <Option value="ROLE_MOULE">Responsable Moule</Option>
                                <Option value="ROLE_MAINTENANCE">Maintenance Générale</Option>
                                <Option value="ROLE_SUPERVISEUR">Superviseur</Option>
                            </Select>
                        </Form.Item>
                    </div>

                    <div className='input'>
                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                            {
                                required: true,
                                message: 'Champ obligatoire',
                            },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>
                    </div>
         
                    <div className='button'>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Connexion
                            </Button>
                        </Form.Item>
                    </div>

                    <hr></hr>

                    {/* <div className="login">
                        <Link href="/login">Déjà inscrits ? </Link>
                    </div> */}

                    <div className="login">
                        <Link href="/login">Déjà inscrit ? </Link>
                    </div>
                   
                </Form>
            </div>
        </div>
    )
}