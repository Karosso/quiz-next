import { useRouter } from 'next/router';
import React, { useState } from 'react'

interface IQuizProps {
  name: string;
}

const Quiz: React.FC<IQuizProps> = () => {

  const router = useRouter();

  const [name, setName] = useState(router.query.name)

  return (
    <div>
      {name}
    </div>
  )
}

export default Quiz;
