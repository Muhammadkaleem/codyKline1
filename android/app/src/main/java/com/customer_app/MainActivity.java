package com.customer_app_working;

import android.content.Intent;

import com.facebook.react.ReactActivity;



public class MainActivity extends ReactActivity {

    @Override
    protected String getMainComponentName() {
        return "customer_app";
    }

@Override
     public void onActivityResult(int requestCode, int resultCode, Intent data) {
    super.onActivityResult(requestCode, resultCode, data);
    MainApplication.getCallbackManager().onActivityResult(requestCode, resultCode, data);
    }
    
}
