"use client";
import './login.css'
import Link from 'next/link'
import { UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { login } from '@/modules/auth/auth.api';

/**
 * Quand tous les champs sont remplis
 * @param {*} values contenu du formulaire
 */
const onFinish = (values) => {
  try {
    const response = login({ data: values });
    
    console.log('Backend Response:', response.data);
  } catch (error) {
    console.error('Erreur lors de la communication avec le backend:', error);
  }
  console.log('Success:', values);
};

/**
 * Quand le formulaire n'est pas rempli correctement
 * @param {*} errorInfo 
 */
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

/**
 * 
 * @returns Méthode principale
 */
export default function Login() {

  
  return (
    <div >
      <div className="formLogin">
        <div><h1>Conexion</h1></div>
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
              <Input prefix={<UserOutlined className="site-form-item-icon" />}/>
            </Form.Item>
          </div>

        <div className='input'>
          <Form.Item
            label="Mot de passe"
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
          
         
        </Form>
      
        <div className="reset">
          <h3>Mot de passe oublié ?</h3>
        </div>
        <hr />

        <div className="register">
          <Link href="/register"> Pas encore inscrit ? </Link>
        </div>
      </div>
    </div>
    
  )
}