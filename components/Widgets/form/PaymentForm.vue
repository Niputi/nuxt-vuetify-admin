<template>
  <v-form v-model="valid">
    <v-subheader class="pa-0">Payment Method</v-subheader>
    <div class="layout ma-0 row">
      <a class="payment-method pa-3 grey--text mr-3">
        <i class="fa fa-credit-card display-3"></i>
      </a>
      <a class="payment-method pa-3 grey--text mr-3">
        <i class="fa fa-apple display-3"></i>
      </a>
      <a class="payment-method pa-3 grey--text mr-3">
        <i class="fa fa-paypal display-3"></i>
      </a>
    </div>
    <v-subheader class="pa-0 mt-3">Payment Detail</v-subheader>
    <div class="d-flex my-2">
      <v-select
        v-model="form.cardTypeId"
        :items="cardTypes"
        label="Card Type"
        auto
        required
        item-text="name"
        item-value="id"
      ></v-select>
    </div>
    <div class="d-flex my-2">
      <v-text-field
        v-model="form.cardNumber"
        v-validate="'required|credit_card'"
        label="Card Number"
        data-vv-name="cardNumber"
        :error-messages="errors.collect('cardNumber')"
        required
        mask="credit-card"
      ></v-text-field>
    </div>
    <div class="d-flex my-2">
      <v-text-field
        v-model="form.cardName"
        v-validate="'required'"
        label="Card Name"
        data-vv-name="cardName"
        :error-messages="errors.collect('cardName')"
        required
      ></v-text-field>
    </div>
    <div class="d-flex">
      <v-text-field
        v-model="form.expireDate"
        class="mr-2"
        label="Expire Date"
        :error-messages="errors.collect('Expire Date')"
        append-icon="today"
        type="date"
        required
      ></v-text-field>
      <v-text-field
        v-model="form.cvv"
        label="CVV"
        mask="###"
        suffix="CVV"
      ></v-text-field>
    </div>
    <div class="d-flex">
      <v-switch v-model="saveCard" label="Save My Card Detials"></v-switch>
    </div>
    <div class="form-btn">
      <v-btn outlined color="primary" @click="submit">Submit</v-btn>
      <v-btn outlined @click="clear">Clear</v-btn>
    </div>
  </v-form>
</template>

<script>
export default {
  $_veeValidate: {
    validator: "new"
  },
  data: () => ({
    saveCard: true,
    cardTypes: [
      {
        id: 1,
        name: "Visa Express"
      },
      {
        id: 2,
        name: "Mastard"
      }
    ],
    valid: true,
    form: {
      cardNumber: "5105105105105100",
      cardName: "Mcihael Wang",
      cardTypeId: 1,
      expireDate: "2018-04-09"
    }
  }),
  mounted() {
    this.$validator.localize("en", this.dictionary);
  },

  methods: {
    submit() {
      this.$validator.validateAll();
    },
    clear() {
      this.form = {};
      this.$validator.reset();
    }
  }
};
</script>

<style lang="sass" scoped>
.payment-method
  border: 1px solid #eee
</style>
