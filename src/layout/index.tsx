import {
    UploadOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme, Flex, Select, Typography, Badge } from 'antd';
import { Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { useOllamaStore } from '../store/ollama-store';

const { Header, Sider, Content } = Layout;

export default function LayoutPage() {

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const {
        ollamaStatus,
        ollamaModels,
        selectedModel,
        setSelectedModel
    } = useOllamaStore()

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider trigger={null}>
                <div className="demo-logo-vertical" />
                <Typography.Title style={{ color: 'white', marginLeft: 20 }} level={4}>Local GPT</Typography.Title>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '2',
                            icon: <VideoCameraOutlined />,
                            label: 'nav 2',
                        },
                        {
                            key: '3',
                            icon: <UploadOutlined />,
                            label: 'nav 3',
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }}>
                    <Flex>

                        <div style={{ marginLeft: 10 }}>
                            <span >Select model</span>
                            <Select
                                value={selectedModel}
                                style={{ minWidth: 200, marginTop: 10, marginLeft: 10 }}
                                onChange={(v) => setSelectedModel(v)}
                            >
                                {
                                    ollamaModels.map(model => (
                                        <Select.Option value={model} key={model}>{model}</Select.Option>
                                    ))
                                }
                            </Select>
                        </div>

                        <div style={{
                            marginLeft: 'auto',
                            marginRight: 20
                        }}>
                            <Typography
                                style={{
                                    fontWeight: 550,
                                    marginLeft: 10,
                                    marginTop: 20
                                }}
                            >
                                {
                                    ollamaStatus ? ' Ollama Running' : 'Ollama is down'
                                }
                                <Badge
                                    style={{ marginLeft: 5, }}
                                    color={ollamaStatus ? 'green' : 'red'}
                                    size='default'></Badge>
                            </Typography>
                        </div>
                    </Flex>
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Outlet />
                    <TanStackRouterDevtools />
                </Content>
            </Layout>
        </Layout>
    );
}

