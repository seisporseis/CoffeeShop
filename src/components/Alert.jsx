
export default function Alert({children}) {
  return (
    <div className="font-bold text-white p-3 bg-red-600 text-sm my-3 rounded-lg">
        {children}
    </div>
  )
}
