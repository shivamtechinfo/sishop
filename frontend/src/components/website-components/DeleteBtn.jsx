'use client'

import { axiosInstance, notify } from '@/library/helper'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FiTrash2 } from 'react-icons/fi';

export default function DeleteBtn({ id }) {
  const router = useRouter()
  function deleteHandler() {
    axiosInstance.delete(`category/delete/${id}`).then(
      (response) => {
        notify(response.data.message, response.data.success)
        if (response.data.success) {
          router.refresh()
        }
      }
    ).catch((error) => {
      console.log(error)
    })
  }

  return (
    <button onClick={deleteHandler} className="text-red-600 hover:text-red-800 transition rounded-md bg-gray-100 px-3 py-1.5 text-xs font-medium cursor-pointer hover:bg-gray-200">
      <FiTrash2  />
    </button>
  )
}

