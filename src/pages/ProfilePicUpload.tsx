'use client'

import { useState, useRef } from 'react'
import axios from 'axios'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ImageIcon, UploadIcon, XIcon, Paintbrush2Icon } from 'lucide-react'
import { SERVER_URL } from '@/lib/serverurl'
import { useNavigate } from 'react-router-dom'

export default function ProfilePicUpload() {
    const navigate=useNavigate()

  const [preview, setPreview] = useState<string | null>(null)
  const [fileName, setFileName] = useState<string>('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setFileName(file.name)
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleUpload = async () => {
    if (!fileInputRef.current?.files?.[0]) {
      console.log('No file selected');
      return;
    }

    const formData = new FormData();
    const file = fileInputRef.current.files[0];
    formData.append('profilepic', file);

    try {
      const response = await axios.patch(`${SERVER_URL}/auth/provider/profile`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Upload successful:', response.data);
      navigate('/provider/verification')
    } catch (error) {
      console.error('Error uploading file:', error);
    
    }
  }

  const handleButtonClick = () => {
    fileInputRef.current?.click()
  }

  const handleCancel = () => {
    setPreview(null)
    setFileName('')
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }
  const handleSkip = () => {
    navigate('/provider/login')
  }
  return (
    <div className='w-full min-h-screen flex justify-center items-center'>
      <Card className="w-full max-w-md mx-auto bg-primarygrey shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Upload Photo</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-center w-full">
            <Label htmlFor="photo-upload" className="sr-only">Choose photo</Label>
            <Input
              id="photo-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
              ref={fileInputRef}
            />
            <Button 
              onClick={handleButtonClick}
              variant="outline" 
              className="w-full h-40 border-dashed border-2 border-gray-300 dark:border-gray-600 hover:border-primary transition-colors"
            >
              {preview ? (
                <img 
                  src={preview} 
                  alt="Preview" 
                  className="max-h-full max-w-full object-contain rounded-md bg-silver" 
                />
              ) : (
                <div className="flex flex-col items-center">
                  <ImageIcon className="h-12 w-12 mb-2 text-primarycharacoal" />
                  <span className="text-sm text-primarycharacoal">Choose a photo</span>
                </div>
              )}
            </Button>
          </div>
          {fileName && (
            <p className="text-sm text-muted-foreground text-center">{fileName}</p>
          )}
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <div className="flex space-x-2 w-full">
            <Button 
              className="flex-1" 
              onClick={handleUpload} 
              disabled={!preview}
            >
              <UploadIcon className="mr-2 h-4 w-4" /> Upload
            </Button>
            <Button 
              variant="destructive"
              className="flex-1" 
              onClick={handleCancel} 
              disabled={!preview}
            >
              <XIcon className="mr-2 h-4 w-4" /> Cancel
            </Button>
          </div>
          <Button 
            variant="destructive"
            className="w-full" 
            onClick={handleSkip}
          >
            <Paintbrush2Icon className="mr-2 h-4 w-4" /> Skip
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
