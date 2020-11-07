import React from "react"

export default ({ children }) => {
  return (
    <div className="bg-bgDark text-textColor flex flex-col w-full h-full oveflow-y-auto">
      <div className="flex flex-col container items-center mx-auto h-full lg:w-3/4 xl:w-1/2 px-4 pt-4 pb-8">
        {children}
      </div>
    </div>
  )
}
