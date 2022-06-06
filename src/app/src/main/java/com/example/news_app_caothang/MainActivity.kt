package com.example.news_app_caothang

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.Window

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        requestWindowFeature (Window.FEATURE_NO_TITLE);
        setContentView(R.layout.activity_main)
    }
}