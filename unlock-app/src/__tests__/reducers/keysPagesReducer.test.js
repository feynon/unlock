import reducer from '../../reducers/keysPagesReducer'
import { SET_KEYS_ON_PAGE_FOR_LOCK } from '../../actions/keysPages'
import { SET_PROVIDER } from '../../actions/provider'
import { SET_NETWORK } from '../../actions/network'

describe('keys page reducer', () => {
  const oneKey = {
    id: 'keyId',
    expiration: 0,
    data: 'hello',
  }

  const anotherKey = {
    id: 'keyId2',
    expiration: 100,
    data: 'world',
  }

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({})
  })

  it('should return the initial state when receveing SET_PROVIDER', () => {
    const state = {
      '0x123': {
        keys: [],
        page: 100,
      },
    }
    expect(
      reducer(state, {
        type: SET_PROVIDER,
      })
    ).toEqual({})
  })

  it('should return the initial state when receveing SET_NETWORK', () => {
    const state = {
      '0x123': {
        keys: [],
        page: 100,
      },
    }

    expect(
      reducer(state, {
        type: SET_NETWORK,
      })
    ).toEqual({})
  })

  describe('SET_KEYS_ON_PAGE_FOR_LOCK', () => {
    it('should set the keys on that page accordingly', () => {
      const state = {}
      const action = {
        type: SET_KEYS_ON_PAGE_FOR_LOCK,
        page: 0,
        lock: '0x123',
        keys: [oneKey, anotherKey],
      }

      expect(reducer(state, action)).toEqual({
        '0x123': {
          page: 0,
          keys: [oneKey, anotherKey],
        },
      })
    })
  })
})
