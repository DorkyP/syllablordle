import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the word in 6 tries. After each guess, the color of the tiles will
        change to show how close your guess was to the word.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="EC"
          status="correct"
        />
        <Cell value="O" />
        <Cell value="LOG" />
        <Cell value="I" />
        <Cell value="CAL" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The syllable "EC" is in the word and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="U" />
        <Cell value="NI" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="VER"
          status="present"
        />
        <Cell value="SI" />
        <Cell value="TY" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The syllable "VER" is in the word but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="IN" />
        <Cell value="EV" />
        <Cell value="IT" />
        <Cell isRevealing={true} isCompleted={true} value="A" status="absent" />
        <Cell value="BLE" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The syllable "A" is not in the word in any spot.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        This is an open source guessing game -{' '}
        <a
          href="https://github.com/DorkyP/syllablordle"
          className="underline font-bold"
        >
          check out the code here
        </a>{' '}
      </p>
    </BaseModal>
  )
}
