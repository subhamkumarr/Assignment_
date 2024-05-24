import Image from "next/image"

export default function SideBar() {
    type Link = { id: number, link: string, name: string }
    const links: Link[] = [
        { id: 1, link: '/dashboard_icon.svg', name: 'Dashboard' },
        { id: 2, link: '/chat_icon.svg', name: 'Chat' },
        { id: 3, link: '/integration_icon.svg', name: 'Integrations' },
        { id: 4, link: '/forecast_icon.svg', name: 'Forecasts' },
        { id: 5, link: '/purchase_icon.svg', name: 'Purchase Order' },
        { id: 6, link: '/log_icon.svg', name: 'Logs' },
        { id: 7, link: '/workflow_icon.svg', name: 'Configure Workflows' },
        { id: 8, link: '/vendor_icon.svg', name: 'Vendors' },
        { id: 9, link: '/approval_icon.svg', name: 'Pending Approval' },
        { id: 10, link: '/agent_icon.svg', name: 'Train Agents' },
    ]
    type Settings = { id: number, url: string, name: string }
    const setings: Settings[] = [
        { id: 1, url: '/account_icon.svg', name: 'My account' },
        { id: 2, url: '/conversation_icon.svg', name: 'Clear Conversations' },
        { id: 3, url: '/theme_icon.svg', name: 'Light mode' },
        { id: 4, url: '/update_icon.svg', name: 'Updates & FAQ' },
        { id: 5, url: '/logout_icon.svg', name: 'Log Out' },
    ]

    return (
        <div className="p-6">
            <p className="py-2 text-2xl text-left font-semibold text-btn-col">interface</p>
            <div className="flex flex-col">
                <div className="flex flex-col my-5">
                    {links.map(link => (
                        <button key={link.id} className="rounded-lg flex items-center py-2 hover:bg-btn-col hover:text-txt-col-hover">
                            <Image src={link.link} alt="empty" className="m-2" width={18} height={18} />
                            <p className="px-2 text-[0.9rem]">{link.name}</p>
                        </button>
                    ))}
                </div>
                <div className="my-5 flex flex-col">
                    {setings.map(setting => (
                        <button key={setting.id} className="rounded-lg flex items-center py-2 hover:bg-btn-col hover:text-txt-col-hover">
                            <Image src={setting.url} alt="empty" className="m-2" width={18} height={18} />
                            <p className="px-2 text-[13px]">{setting.name}</p>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}
