import { HomeIcon , UtensilsIcon , ActivityIcon , UserIcon } from "lucide-react"
import { NavLink } from "react-router"

const BottomNav = () => {
    const navItems =[
    {path:'/' , label:'Home' , icon:HomeIcon},
    {path:'/food' , label:'Food' , icon:UtensilsIcon},
    {path:'/activity' , label:'Activity' , icon:ActivityIcon},
    {path:'/profile' , label:'profile' , icon:UserIcon},
    ]
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900
    border-top-2 border-slate-100 dark:border-slate-800 px-4 pb-safe lg:hidden transition-colors 
    duration-200">
   <div className="max-w-lg mx-auto flex justify-around items-center h-16">
 {navItems.map((item)=>(
    <NavLink key={item.path} to={item.path} className={({isActive}) => `flex flex-col items-center
    gap-1 px-4 py-2 rounded-xl transition-all duration-200  ${isActive ? `text-emerald-400`
        :`dark:hover:text-slate-300`
    }`}>
        <item.icon className="size-5.5"/>
        <span className="text-xs font-medium">{item.label}</span>
    </NavLink>
 ))}
   </div>
    </nav>
  )
}

export default BottomNav