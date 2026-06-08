import { useAppContext } from "../context/AppContext"
import { useState , useEffect} from "react";
import Card from "../components/ui/Card";
import  type { FoodEntry } from "../FitTrack_Assets/types";
import { quickActivities } from "../FitTrack_Assets/assets/assets";
const FoodLog = () => {
  const {allFoodLogs , setAllFoodLogs } = useAppContext();
  const [entries , setEntries] = useState<FoodEntry[]>([]);
  const [showForm , setShowForm] = useState(false);
  const[formData , setFormData] = useState<FormData>({
    name: '',
    calories: 0,
    mealType: ''
  })
  const[loading , setLoading] = useState(false);
  const today = new Date().toISOString().split('T')[0] ,
  const loadEntries = (): void =>
  {
    const todayEntries= allFoodLogs.filter((e : FoodEntry) => e.createdAt?.split('T')[0] === today)
    setEntries(todayEntries)
  }
  const totalCalories = entries.reduce((sum , e)=> sum + e.calories , 0)
  useEffect(() => {
    (()=>
    {
      loadEntries();
    }) ();
  },[allFoodLogs])
  return (
    <div className="page-container">
      {/*Page Header*/}
      <div className="page-header">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Food log</h1>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Track Your Daily Intake</p>
          </div>
          <div className="text-right">
          <p className="text-sm  text-slate-500  dark:text-slate-400">Today's Total</p>
          <p className="text-4xl font-bold text-emarald-600 dark:text-emerald-400">{totalCalories} kcal </p>
          </div>
        </div>
      </div>
      <div className="page-content-grid">
           {/*Quick Add Section */}
           {!showForm && 
           (
            <div className="spcae-y-4">
              <Card>
              <h3 className="font-semibold text-slate-700 dark:text-slate-200 mb-3">Quick Add </h3>
              <div className="flex flex-wrap gap-2">
             {quickActivities.map((activity)=> (
              <button 
              className="px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200
            dark:hover:bg-slate-700 text-sm font-medium text-slate-700 dark:text-slate-200  transition-colors rounded-xl  key={activity.name}>
                {activity.emoji} {activity.name}
              </button>
             ))}
              </div>
              </Card>
              </div>
             )}
              </div>
              export default FoodLog