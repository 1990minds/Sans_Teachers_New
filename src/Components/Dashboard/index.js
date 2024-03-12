import React, { useEffect } from 'react'
import { classesSelector, fetchAllClasses } from '../../api/class'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllSection, sectionSelector } from '../../api/section'
import { fetchAllTeacher, teacherSelector } from '../../api/teacher'
import { fetchAllStudent, studentSelector } from '../../api/student'





export default function Index() {


const dispatch = useDispatch()
const {all_classes} = useSelector(classesSelector)
const {all_section} = useSelector(sectionSelector)
const {all_teacher} = useSelector(teacherSelector)
const {all_student} = useSelector(studentSelector)

console.log(all_teacher)


useEffect(()=>{
dispatch(fetchAllClasses())
dispatch(fetchAllSection())
dispatch(fetchAllTeacher())
dispatch(fetchAllStudent)

},[])









  return (
    <div>
      <section class="py-3">
    <div class="container px-4 mx-auto">
    <div class="mb-6 bg-gray-500 rounded-xl">
    <div class="flex flex-wrap">
        <div class="w-full sm:w-1/2 lg:w-1/4 pl-4 md:pl-8 xl:pl-10 border-b lg:border-b-0 sm:border-r border-gray-700">
          <div class="py-5 px-6">
            <h5 class="text-sm font-semibold text-white mb-6 leading-normal tracking-wide">Total  Number of Students</h5>
            <div class="flex flex-wrap items-center mb-1 -m-2">
              <div class="w-auto p-2">
                <h4 class="text-2xl text-gray-100 font-bold tracking-wide">{all_student?.length}</h4>
              </div>
              <div class="w-auto p-2">
                <div class="inline-flex px-2 h-7 items-center justify-center text-purple-500 bg-purple-900 rounded-full">
                  <svg width="16" height="16" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.00002 3.33337V12.6667" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M10.6667 10L8.00002 12.6667" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M5.33334 10L8.00001 12.6667" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                  <span class="text-xs font-medium">59%</span>
                </div>
              </div>
            </div>
            <p class="text-xs font-semibold text-gray-300">Last week 84,70K</p>
          </div>
        </div>
        <div class="w-full sm:w-1/2 lg:w-1/4 pl-4 md:pl-8 xl:pl-10 border-b lg:border-b-0 lg:border-r border-gray-700">
          <div class="py-5 px-6">
            <h5 class="text-sm font-semibold text-white mb-6 leading-normal tracking-wide">Number of Staff members</h5>
            <div class="flex flex-wrap items-center mb-1 -m-2">
              <div class="w-auto p-2">
                <h4 class="text-2xl text-gray-100 font-bold tracking-wide">{all_teacher?.length}</h4>
              </div>
              {/* <div class="w-auto p-2">
                <div class="inline-flex px-2 h-7 items-center justify-center text-purple-500 bg-purple-900 rounded-full">
                  <svg width="16" height="16" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.00002 3.33337V12.6667" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M10.6667 10L8.00002 12.6667" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M5.33334 10L8.00001 12.6667" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                  <span class="text-xs font-medium">0,5%</span>
                </div>
              </div> */}
            </div>
            {/* <p class="text-xs font-semibold text-gray-300">Last week 242,99K</p> */}
          </div>
        </div>
        <div class="w-full sm:w-1/2 lg:w-1/4 pl-4 md:pl-8 xl:pl-10 border-b md:border-b-0 sm:border-r border-gray-700">
          <div class="py-5 px-6">
            <h5 class="text-sm font-semibold text-white mb-6 leading-normal tracking-wide">Number of Grade</h5>
            <div class="flex flex-wrap items-center mb-1 -m-2">
              <div class="w-auto p-2">
                <h4 class="text-2xl text-gray-100 font-bold tracking-wide">{all_classes?.length}</h4>
              </div>
              {/* <div class="w-auto p-2">
                <div class="inline-flex px-2 h-7 items-center justify-center text-green-500 bg-green-900 rounded-full">
                  <svg width="16" height="16" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 3.33337V12.6667" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M10.6667 6.00004L8 3.33337" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M5.33334 6.00004L8.00001 3.33337" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                  <span class="text-xs font-medium">1,0%</span>
                </div>
              </div> */}
            </div>
            {/* <p class="text-xs font-semibold text-gray-300">Last week 1.18M</p> */}
          </div>
        </div>
        <div class="w-full sm:w-1/2 lg:w-1/4 pl-4 md:pl-8 xl:pl-10">
          <div class="py-5 px-6">
            <h5 class="text-sm font-semibold text-white mb-6 leading-normal tracking-wide">Number of Sections</h5>
            <div class="flex flex-wrap items-center mb-1 -m-2">
              <div class="w-auto p-2">
                <h4 class="text-2xl text-gray-100 font-bold tracking-wide">{all_section?.length}</h4>
              </div>
              {/* <div class="w-auto p-2">
                <div class="inline-flex px-2 h-7 items-center justify-center text-purple-500 bg-purple-900 rounded-full">
                  <svg width="16" height="16" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.00002 3.33337V12.6667" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M10.6667 10L8.00002 12.6667" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M5.33334 10L8.00001 12.6667" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                  <span class="text-xs font-medium">59%</span>
                </div>
              </div> */}
            </div>
            {/* <p class="text-xs font-semibold text-gray-300">Last week 84,70K</p> */}
          </div>
        </div>
      </div>
    </div>
   
  </div>
</section>
    </div>
  )
}
