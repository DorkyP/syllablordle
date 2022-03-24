import {
	HeartIcon,
  ChartBarIcon,
  CogIcon,
  InformationCircleIcon,
} from '@heroicons/react/outline'

type Props = {}

export const Footer = ({
}: Props) => {
  return (
    <div>
      <div className="pt-2 text-xl ml-2.5 font-bold dark:text-white flex justify-center mb-1">
        <HeartIcon className="h-6 w-6 mr-2 cursor-pointer dark:stroke-white"/>
				Syllablordle?
				<a href='https://ko-fi.com/R6R2BPNFL' target='_blank'><img className="pl-2 w-32" 	height='12' src='https://cdn.ko-fi.com/cdn/kofi2.png?v=3' alt='Buy Me a Coffee at ko-fi.com' /></a>
      </div>
    </div>
  )
}
