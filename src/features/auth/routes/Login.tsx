import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { Form, message, Input, Button } from 'antd'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/stores'

const formItemLayout = {
  labelCol: { span: 0 },
  wrapperCol: { span: 24 }
}

const Login = () => {
  const [form] = Form.useForm()
  const { user, login } = useAuth()
  const navigate = useNavigate()

  // const toForget = () => {
  //   navigate('./forgot')
  // }

  const onFinish = async (values: any) => {
    const success = await login(values)
    if (success) {
      message.success('已登录')
    }
  }

  useEffect(() => {
    if (user) {
      navigate('/app')
    }
  }, [user])

  return (
    <Form
      {...formItemLayout}
      preserve={false}
      form={form}
      size="large"
      className="w-100"
      name="login"
      onFinish={onFinish}
      scrollToFirstError
    >
      <Form.Item noStyle>
        <h1 className="text-center text-xl mb-6">欢迎使用Kunlun管理后台</h1>
      </Form.Item>
      <Form.Item name="username" rules={[{ required: true, message: '请输入用户名' }]}>
        <Input
          prefix={<UserOutlined />}
          maxLength={11}
          placeholder="请输入用户名"
          autoComplete="off"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: '请输入您的密码'
          },
          {
            min: 6,
            max: 20,
            message: '请输入6到20位登录密码'
          }
        ]}
        hasFeedback
      >
        <Input.Password
          prefix={<LockOutlined />}
          minLength={6}
          maxLength={20}
          placeholder="请输入登录密码"
          autoComplete="off"
        />
      </Form.Item>
      <Form.Item className="mt-8 mb-4" wrapperCol={formItemLayout.wrapperCol}>
        <Button className="rounded" size="large" type="primary" htmlType="submit" block>
          登录
        </Button>
      </Form.Item>
      {/* <div className="flex justify-end">
        <Button type="link" onClick={toForget}>
          忘记密码？
        </Button>
      </div> */}
    </Form>
  )
}

export default Login
