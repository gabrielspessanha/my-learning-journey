import { useState, useEffect } from "react"

import{
  Box,
  Button,
  Text,
  Input,
  FormControl,
  FormLabel,
  Center,
  HStack
} from "@chakra-ui/react";

const PomodoroTimer = () => {
  const [minutes, setMinutes] = useState(25)
  const [seconds, setSeconds] = useState(0)
  const [isActive, setIsActive ] = useState(false)
  const [userTime, setUserTime] = useState(25)

  useEffect(()=>{
    let interval

    if(isActive && (minutes > 0 || seconds > 0)){
      interval = setInterval(()=>{
        if(seconds === 0){
          setMinutes(minutes -1)
          setSeconds(59)
        }else{
          setSeconds(seconds -1)
        }
      }, 1000)
    }else if (minutes === 0 && seconds === 0){
      alert("Tempo esgotado!")
    }else{
      clearInterval(interval)
    }
    return ()=> clearInterval(interval)
  },[isActive,minutes, seconds])

  const handleTimeChange = (e: any)=>{
    setUserTime(e.target.value)
    setMinutes(e.target.value)
  }

 
  const toggleTimer = ()=>{
    setIsActive(!isActive)
  }

  const resetTimer = ()=>{
    setIsActive(false)
    setMinutes(userTime)
    setSeconds(0)
  }

  return (
    <Center>
      <Box width="100%" maxWidth="400px">
        <Text fontSize="4xl" mb="4" textAlign="center">
          {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
        </Text>
        <FormControl mb="4">
          <FormLabel>Definir Tempo(minutos)</FormLabel>
          <Input type="number" value={userTime} onChange={handleTimeChange} isDisabled={isActive} />
        </FormControl>

        <HStack spacing="4">
          <Button onClick={toggleTimer} colorScheme={isActive?"red":"green"}>
            {isActive? "Pausar":"Iniciar"}
          </Button>
          <Button colorScheme="gray" onClick={resetTimer}>
            Reininciar
          </Button>
        </HStack>
      </Box>
    </Center>
  )
}

export default PomodoroTimer