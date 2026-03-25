import localFont from 'next/font/local'
import { Roboto } from 'next/font/google'

export const darwinPro = localFont({
  src: [
    {
      path: '../fonts/Darwin-Pro-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/Darwin-Pro-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Darwin-Pro-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/Darwin-Pro-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/Darwin-Pro-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-darwin',
  display: 'swap',
})

export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap',
})
