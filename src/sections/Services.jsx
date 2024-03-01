import React from 'react'
import { services } from '../constants'
import ServiceCard from "../Components/ServiceCard"
const Services = () => {
  return (
    <div>
      <section className='max-container flex flex-wrap gap-9 justify-center'>
        {services.map((service)=>(
          <ServiceCard key={service.label} {...service} />
        ))}
      </section>
    </div>
  )
}

export default Services
