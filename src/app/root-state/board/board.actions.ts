import { createAction, props } from '@ngrx/store';
import { Order } from './board.interfaces';

export const createOrder = createAction(
  '[Board] create order',
  (order: Order) => ({ order })
);
export const createOrderSuccess = createAction(
  '[Board] create order success',
  (success: object) => ({ success })
);
export const createOrderFail = createAction(
  '[Board] create order fail',
  (error: Error) => ({ error })
);

export const loadOrders = createAction(
  '[Board] load orders'
);
export const loadOrdersSuccess = createAction(
  '[Board] load orders success',
  (orders: Order[]) => ({ orders })
);
export const loadOrdersFail = createAction(
  '[Board] load orders fail',
  (error: Error) => ({ error })
);

export const addOffer = createAction(
  '[Board] add offer for order',
  props<{ orderId: string, activeSitter: string }>() 
);
export const addOfferSuccess = createAction(
  '[Board] add offer success',
  (success: object) => ({ success })
);
export const addOfferFail = createAction(
  '[Board] add offer fail',
  (error: Error) => ({ error })
);
/////////////////////////////////////////
export const deleteOrder = createAction(
  '[Board] add offer for order',
  (id: string) => ({id}) 
);
export const deleteOrderSuccess = createAction(
  '[Board] add offer success',
  (success: object) => ({ success })
);
export const deleteOrderFail = createAction(
  '[Board] add offer fail',
  (error: Error) => ({ error })
);
/////////////////////////////////////////
export const removeOffer = createAction(
  '[Board] remove offer',
  (id: string, sitterId: string) => ({id, sitterId}) 
);
export const removeOfferSuccess = createAction(
  '[Board] remove offer success',
  (success: object) => ({ success })
);
export const removeOfferFail = createAction(
  '[Board] remove offer fail',
  (error: Error) => ({ error })
);